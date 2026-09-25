import React, { useEffect, useState } from 'react';

// Recordatorios: programan una notificación local que se repite para avisarte
// que practiques. Funciona en la app de Android (APK), usando el plugin
// Local Notifications de Capacitor, al que accedemos por window.Capacitor para
// no depender del paquete en el build web (gh-pages).

const getPlugin = () =>
  (typeof window !== 'undefined' &&
    window.Capacitor?.Plugins?.LocalNotifications) ||
  null;

const isNativeApp = () =>
  typeof window !== 'undefined' &&
  !!window.Capacitor?.isNativePlatform?.();

const STORAGE_KEY = 'reminderSettings';

// IDs fijos de nuestras notificaciones (para poder cancelarlas y reprogramarlas)
const IDS = [3001, 3002, 3003, 3004, 3005, 3006];

const FREQUENCIES = [
  { id: 'daily-1', label: 'Una vez al día' },
  { id: 'daily-2', label: 'Dos veces al día' },
  { id: 'every-4h', label: 'Cada 4 horas' },
  { id: 'every-2h', label: 'Cada 2 horas' },
];

const TITLE = '¡Hora de practicar inglés! 🇬🇧';
const BODY = 'Hacé un par de ejercicios para no perder el ritmo. 💪';

const loadSettings = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      enabled: !!saved.enabled,
      frequency: FREQUENCIES.some((f) => f.id === saved.frequency)
        ? saved.frequency
        : 'daily-1',
      hour: typeof saved.hour === 'number' ? saved.hour : 20,
    };
  } catch {
    return { enabled: false, frequency: 'daily-1', hour: 20 };
  }
};

// Arma las notificaciones (con su horario) según la frecuencia elegida
const buildNotifications = (frequency, hour) => {
  const base = { title: TITLE, body: BODY };
  if (frequency === 'daily-1') {
    return [{ ...base, id: IDS[0], schedule: { on: { hour, minute: 0 }, repeats: true } }];
  }
  if (frequency === 'daily-2') {
    return [
      { ...base, id: IDS[0], schedule: { on: { hour: 10, minute: 0 }, repeats: true } },
      { ...base, id: IDS[1], schedule: { on: { hour: 20, minute: 0 }, repeats: true } },
    ];
  }
  if (frequency === 'every-4h') {
    return [{ ...base, id: IDS[2], schedule: { every: 'hour', count: 4, repeats: true } }];
  }
  // every-2h
  return [{ ...base, id: IDS[3], schedule: { every: 'hour', count: 2, repeats: true } }];
};

const Reminders = () => {
  const native = isNativeApp();
  const [settings, setSettings] = useState(loadSettings);
  const [status, setStatus] = useState(null); // { type: 'ok'|'error', text }
  const [busy, setBusy] = useState(false);

  const save = (next) => {
    setSettings(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // sin localStorage: se usa solo en esta sesión
    }
  };

  const cancelAll = async (LN) => {
    try {
      await LN.cancel({ notifications: IDS.map((id) => ({ id })) });
    } catch {
      // no había ninguna programada
    }
  };

  const enable = async () => {
    const LN = getPlugin();
    if (!LN) return;
    setBusy(true);
    setStatus(null);
    try {
      const perm = await LN.requestPermissions();
      if (perm.display !== 'granted') {
        setStatus({
          type: 'error',
          text: 'Necesito permiso para enviarte notificaciones. Activalo en los ajustes de la app.',
        });
        setBusy(false);
        return;
      }
      await cancelAll(LN);
      await LN.schedule({
        notifications: buildNotifications(settings.frequency, settings.hour),
      });
      save({ ...settings, enabled: true });
      setStatus({ type: 'ok', text: 'Listo. Te voy a avisar para que practiques. 🔔' });
    } catch (e) {
      setStatus({ type: 'error', text: 'No se pudieron programar los recordatorios: ' + (e?.message || e) });
    }
    setBusy(false);
  };

  // Notificación de prueba: dispara una a los ~5 segundos para verificar
  const testNow = async () => {
    const LN = getPlugin();
    if (!LN) return;
    setBusy(true);
    setStatus(null);
    try {
      const perm = await LN.requestPermissions();
      if (perm.display !== 'granted') {
        setStatus({
          type: 'error',
          text: 'Necesito permiso para enviarte notificaciones. Activalo en los ajustes de la app.',
        });
        setBusy(false);
        return;
      }
      await LN.schedule({
        notifications: [
          {
            id: IDS[5],
            title: 'Prueba de notificación ✅',
            body: 'Si ves esto, los recordatorios funcionan. 🎉',
            schedule: { at: new Date(Date.now() + 5000) },
          },
        ],
      });
      setStatus({
        type: 'ok',
        text: 'Enviada. Debería aparecer en unos 5 segundos (podés salir de la app para verla).',
      });
    } catch (e) {
      setStatus({ type: 'error', text: 'No se pudo enviar la prueba: ' + (e?.message || e) });
    }
    setBusy(false);
  };

  // Prueba en el navegador: muestra una notificación inmediata vía el service
  // worker. En la web no se pueden programar avisos en segundo plano.
  const testWeb = async () => {
    setStatus(null);
    if (typeof Notification === 'undefined') {
      setStatus({ type: 'error', text: 'Este navegador no soporta notificaciones.' });
      return;
    }
    setBusy(true);
    try {
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') {
        setStatus({
          type: 'error',
          text: 'No diste permiso de notificaciones. Activalo en el candado 🔒 de la barra de direcciones.',
        });
        setBusy(false);
        return;
      }
      const title = 'Prueba de notificación ✅';
      const options = { body: 'Si ves esto, las notificaciones del navegador funcionan. 🎉' };
      if (navigator.serviceWorker?.ready) {
        const reg = await navigator.serviceWorker.ready;
        await reg.showNotification(title, options);
      } else {
        // eslint-disable-next-line no-new
        new Notification(title, options);
      }
      setStatus({ type: 'ok', text: 'Enviada. Debería aparecer ahora mismo.' });
    } catch (e) {
      setStatus({ type: 'error', text: 'No se pudo mostrar la notificación: ' + (e?.message || e) });
    }
    setBusy(false);
  };

  const disable = async () => {
    const LN = getPlugin();
    if (!LN) return;
    setBusy(true);
    setStatus(null);
    try {
      await cancelAll(LN);
      save({ ...settings, enabled: false });
      setStatus({ type: 'ok', text: 'Recordatorios desactivados.' });
    } catch (e) {
      setStatus({ type: 'error', text: 'No se pudieron cancelar: ' + (e?.message || e) });
    }
    setBusy(false);
  };

  // Si cambia la frecuencia/hora y ya estaban activos, reprogramar
  useEffect(() => {
    if (native && settings.enabled) {
      const LN = getPlugin();
      if (!LN) return;
      (async () => {
        await cancelAll(LN);
        await LN.schedule({
          notifications: buildNotifications(settings.frequency, settings.hour),
        });
      })().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.frequency, settings.hour]);

  return (
    <div className="min-h-screen bg-htb-bg p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          🔔 Recordatorios
        </h1>
        <p className="text-htb-text-dim text-sm sm:text-base mb-6">
          Activá avisos cada cierto tiempo para acordarte de practicar y no
          perder el ritmo.
        </p>

        {!native && (
          <div className="p-4 rounded-md bg-htb-sidebar border border-yellow-500/50">
            <p className="text-yellow-400 text-sm mb-2 font-semibold">
              📱 Solo en la app de Android
            </p>
            <p className="text-htb-text-dim text-sm mb-3">
              Los recordatorios <b>que se repiten en segundo plano</b> (aunque
              cierres la app) necesitan la app de Android. En el navegador solo
              puedo mostrarte notificaciones <b>en el momento</b>: no hay forma
              estándar de programar un aviso para más tarde con la pestaña
              cerrada (eso requeriría un servidor con push).
            </p>
            <button
              onClick={testWeb}
              disabled={busy}
              className="text-sm px-4 py-2 rounded-md border border-htb-green/50 text-htb-green hover:bg-htb-card disabled:opacity-50 transition-colors"
            >
              🔔 Probar notificación (navegador)
            </button>
            {status && (
              <div
                className={`mt-3 p-3 rounded-md border text-sm ${
                  status.type === 'ok'
                    ? 'bg-htb-sidebar border-htb-green/40 text-htb-text'
                    : 'bg-htb-sidebar border-red-500 text-red-400'
                }`}
              >
                {status.text}
              </div>
            )}
          </div>
        )}

        {native && (
          <div className="space-y-6">
            <div>
              <p className="text-sm text-htb-text mb-2">Frecuencia</p>
              <div className="flex flex-wrap gap-2">
                {FREQUENCIES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => save({ ...settings, frequency: f.id })}
                    disabled={busy}
                    className={`text-sm px-3 py-1.5 rounded-md border transition-colors disabled:opacity-50 ${
                      settings.frequency === f.id
                        ? 'border-htb-green bg-htb-card text-htb-green'
                        : 'border-gray-700 bg-htb-sidebar text-htb-text-dim hover:border-htb-green/50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {settings.frequency === 'daily-1' && (
              <div>
                <p className="text-sm text-htb-text mb-2">Hora del aviso</p>
                <input
                  type="number"
                  min={0}
                  max={23}
                  value={settings.hour}
                  onChange={(e) =>
                    save({
                      ...settings,
                      hour: Math.max(0, Math.min(23, Number(e.target.value) || 0)),
                    })
                  }
                  className="w-20 bg-htb-bg text-white border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-htb-green"
                />
                <span className="ml-2 text-htb-text-dim text-sm">
                  (0–23 hs) → {String(settings.hour).padStart(2, '0')}:00
                </span>
              </div>
            )}

            <div className="flex flex-wrap gap-3 items-center">
              {!settings.enabled ? (
                <button
                  onClick={enable}
                  disabled={busy}
                  className="bg-htb-green hover:bg-htb-green-hover disabled:opacity-50 text-htb-bg px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  {busy ? 'Activando...' : 'Activar recordatorios'}
                </button>
              ) : (
                <button
                  onClick={disable}
                  disabled={busy}
                  className="bg-htb-sidebar border border-red-500 text-red-400 hover:bg-htb-card disabled:opacity-50 px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  {busy ? 'Desactivando...' : 'Desactivar'}
                </button>
              )}
              {settings.enabled && (
                <span className="text-htb-green text-sm">🟢 Activados</span>
              )}
              <button
                onClick={testNow}
                disabled={busy}
                className="text-sm px-4 py-2 rounded-md border border-htb-green/50 text-htb-green hover:bg-htb-card disabled:opacity-50 transition-colors"
              >
                🔔 Probar ahora
              </button>
            </div>

            {status && (
              <div
                className={`p-3 rounded-md border text-sm ${
                  status.type === 'ok'
                    ? 'bg-htb-sidebar border-htb-green/40 text-htb-text'
                    : 'bg-htb-sidebar border-red-500 text-red-400'
                }`}
              >
                {status.text}
              </div>
            )}

            <p className="text-xs text-htb-text-dim">
              Los avisos son locales (no usan internet). Si Android está en modo
              ahorro de batería, puede retrasarlos un poco.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reminders;

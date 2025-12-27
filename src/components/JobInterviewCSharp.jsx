import React, { useState } from 'react';

const JobInterviewCSharp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const interviewQuestions = [
    {
      id: 1,
      category: "C# Fundamentals",
      question: "Can you explain the difference between value types and reference types in C#?",
      recommendation: "This is a fundamental concept. Explain that value types (int, bool, struct) are stored on the stack and contain the actual data, while reference types (class, interface, delegate) are stored on the heap and contain a reference to the data. Mention boxing/unboxing if appropriate.",
      tips: [
        "Mention stack vs heap memory allocation",
        "Give examples of each type",
        "Explain behavior when passing to methods",
        "Mention nullable types if relevant"
      ],
      sampleAnswer: "In C#, value types and reference types differ in how they store data. Value types like int, bool, and structs are stored directly on the stack and contain the actual value. When you assign a value type to another variable, it creates a copy of the data. Reference types like classes, interfaces, and delegates are stored on the heap, and the variable holds a reference to the memory location. When you assign a reference type, both variables point to the same object. This affects behavior when passing parameters to methods – value types are passed by value by default, creating a copy, while reference types pass the reference. I should also mention that value types can be made nullable using the Nullable<T> syntax or the ? shorthand."
    },
    {
      id: 2,
      category: "C# Fundamentals",
      question: "What are the different access modifiers in C# and when would you use each?",
      recommendation: "List all access modifiers (public, private, protected, internal, protected internal, private protected) and explain their visibility scope. Provide scenarios where each is appropriate, focusing on encapsulation and the principle of least privilege.",
      tips: [
        "List all 6 access modifiers",
        "Explain visibility scope for each",
        "Mention encapsulation principles",
        "Give practical use cases"
      ],
      sampleAnswer: "C# has six access modifiers. 'Public' makes members accessible from anywhere and is used for APIs that need to be exposed. 'Private' restricts access to within the same class, which is the default for class members and follows the principle of encapsulation. 'Protected' allows access within the class and derived classes, useful for inheritance scenarios. 'Internal' restricts access to within the same assembly, which is great for creating internal APIs that shouldn't be exposed to other assemblies. 'Protected internal' combines protected and internal – accessible within the assembly or from derived classes. 'Private protected' is the most restrictive combination, accessible only within the containing class or derived classes within the same assembly. In practice, I follow the principle of least privilege, starting with the most restrictive modifier and only opening up access when necessary."
    },
    {
      id: 3,
      category: "Object-Oriented Programming",
      question: "Explain the four pillars of Object-Oriented Programming and how they're implemented in C#.",
      recommendation: "Cover Encapsulation, Abstraction, Inheritance, and Polymorphism. For each pillar, explain the concept and give specific C# examples like properties, abstract classes/interfaces, class inheritance, and method overriding/overloading.",
      tips: [
        "Cover all four pillars: Encapsulation, Abstraction, Inheritance, Polymorphism",
        "Provide C#-specific implementation examples",
        "Mention keywords like abstract, virtual, override",
        "Explain benefits of each pillar"
      ],
      sampleAnswer: "The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism. Encapsulation in C# is implemented through access modifiers and properties, hiding internal state and exposing only necessary functionality. For example, using private fields with public properties. Abstraction is achieved through abstract classes and interfaces, defining contracts without implementation details – like IDisposable or abstract base classes. Inheritance allows classes to derive from base classes using the colon syntax, promoting code reuse – though C# only supports single inheritance for classes. Polymorphism enables treating derived classes as their base type, implemented through virtual and override keywords for method overriding, or through method overloading. I've used these principles extensively to create maintainable, extensible code architectures."
    },
    {
      id: 4,
      category: "Object-Oriented Programming",
      question: "What's the difference between abstract classes and interfaces in C#? When would you use each?",
      recommendation: "Explain that abstract classes can have implementation and state, while interfaces (traditionally) only define contracts. Mention C# 8.0+ default interface implementations. Discuss use cases: abstract classes for 'is-a' relationships with shared implementation, interfaces for 'can-do' capabilities and multiple inheritance.",
      tips: [
        "Explain implementation differences",
        "Mention C# 8.0 default interface methods",
        "Discuss inheritance limitations (single vs multiple)",
        "Provide real-world use case examples"
      ],
      sampleAnswer: "Abstract classes and interfaces serve different purposes. Abstract classes can contain both abstract and concrete methods, fields, and constructors. They're used when you have an 'is-a' relationship and want to share common implementation among derived classes. You can only inherit from one abstract class due to single inheritance. Interfaces traditionally only define contracts – method signatures without implementation. However, since C# 8.0, interfaces can have default implementations. Classes can implement multiple interfaces, which is useful for defining capabilities or 'can-do' relationships. I use abstract classes when I need to provide common functionality and state, like a base repository class. I use interfaces when defining contracts that multiple unrelated classes should implement, like IDisposable, or when I need a class to have multiple capabilities, like implementing both IComparable and ICloneable."
    },
    {
      id: 5,
      category: "LINQ and Collections",
      question: "Explain LINQ and provide examples of when you would use query syntax versus method syntax.",
      recommendation: "Describe LINQ (Language Integrated Query) as a way to query collections in a declarative manner. Explain both syntaxes, mention deferred execution, and discuss performance considerations. Provide examples of common operations like filtering, projection, and joining.",
      tips: [
        "Explain what LINQ is and its benefits",
        "Compare query syntax and method syntax",
        "Mention deferred vs immediate execution",
        "Provide practical examples"
      ],
      sampleAnswer: "LINQ, or Language Integrated Query, allows querying collections in a declarative, readable manner. There are two syntaxes: query syntax, which resembles SQL with 'from', 'where', 'select' keywords, and method syntax using extension methods like Where(), Select(), OrderBy(). Query syntax is more readable for complex queries with multiple operations and joins, similar to SQL. Method syntax is more concise for simple operations and allows chaining. I generally prefer method syntax because it's more flexible and can express all LINQ operations, while query syntax has limitations. An important concept is deferred execution – most LINQ operations don't execute until you enumerate the results, which is efficient for large datasets. For immediate execution, you use operations like ToList(), Count(), or First(). I've used LINQ extensively for data manipulation, transforming API responses, and working with Entity Framework queries."
    },
    {
      id: 6,
      category: "LINQ and Collections",
      question: "What's the difference between IEnumerable, ICollection, IList, and List in C#?",
      recommendation: "Explain the hierarchy and capabilities of each interface. IEnumerable for iteration only, ICollection adds Count and Add/Remove, IList adds indexing, and List is the concrete implementation. Discuss when to use each in method signatures and why programming to interfaces is beneficial.",
      tips: [
        "Explain the inheritance hierarchy",
        "Describe capabilities of each",
        "Mention performance implications",
        "Discuss when to use each in method signatures"
      ],
      sampleAnswer: "These form a hierarchy of collection interfaces. IEnumerable<T> is the most basic, providing only forward-only iteration using foreach – it's the base for all collections. ICollection<T> extends IEnumerable and adds Count property and methods like Add(), Remove(), and Clear(). IList<T> further extends ICollection, adding index-based access and methods like Insert() and RemoveAt(). List<T> is a concrete implementation of IList. In method signatures, I follow the principle of accepting the least specific type needed – if I only need to iterate, I use IEnumerable to maximize flexibility. If I need to know the count or modify the collection, I use ICollection or IList. I return specific types like List<T> when the caller might need all capabilities. This approach makes code more flexible and easier to test with mock implementations."
    },
    {
      id: 7,
      category: "Asynchronous Programming",
      question: "Explain async/await in C#. What problems does it solve?",
      recommendation: "Describe async/await as a way to write asynchronous code that looks synchronous. Explain that it solves the problem of blocking threads during I/O operations, improving scalability and responsiveness. Mention the Task-based Asynchronous Pattern (TAP) and common pitfalls like async void and deadlocks.",
      tips: [
        "Explain what async/await does",
        "Discuss benefits for scalability and UI responsiveness",
        "Mention Task and Task<T>",
        "Warn about common pitfalls"
      ],
      sampleAnswer: "Async/await is C#'s pattern for asynchronous programming, allowing you to write non-blocking code that looks synchronous. It solves the problem of thread blocking during I/O operations like database queries, file access, or HTTP requests. Without async/await, these operations would block a thread, reducing scalability in server applications and freezing UI in desktop apps. When you mark a method as async and await a Task, the thread is freed to do other work while waiting for the operation to complete. This is especially important for ASP.NET applications where thread pool threads are limited. The method returns a Task or Task<T> representing the ongoing operation. Common pitfalls include using async void (which should only be used for event handlers), not awaiting tasks (causing fire-and-forget behavior), and causing deadlocks by blocking on async code with .Result or .Wait() in UI applications. I always use async/await for any I/O-bound operations."
    },
    {
      id: 8,
      category: "Asynchronous Programming",
      question: "What's the difference between Task.Run and async/await? When would you use each?",
      recommendation: "Explain that Task.Run offloads work to a thread pool thread for CPU-bound operations, while async/await is for I/O-bound operations that don't require a thread. Clarify that async/await doesn't create threads. Discuss scenarios for each.",
      tips: [
        "Clarify that async/await doesn't create threads",
        "Explain Task.Run for CPU-bound work",
        "Discuss I/O-bound vs CPU-bound operations",
        "Warn against misuse of Task.Run"
      ],
      sampleAnswer: "Task.Run and async/await serve different purposes. Async/await is for I/O-bound operations like network requests or database calls, where the operation doesn't require CPU work – the thread is freed while waiting for external resources. It doesn't create new threads; it uses I/O completion ports efficiently. Task.Run, on the other hand, is for CPU-bound work that you want to offload to a thread pool thread to avoid blocking the current thread. For example, in a UI application, you'd use Task.Run to run a CPU-intensive calculation on a background thread. A common mistake is wrapping async I/O operations in Task.Run, which wastes thread pool resources. I use async/await for database queries, HTTP calls, and file I/O. I use Task.Run when I have computationally expensive operations that would otherwise block the UI thread or when I need parallel processing of CPU-bound work."
    },
    {
      id: 9,
      category: "Memory Management",
      question: "How does garbage collection work in C#? What are the different generations?",
      recommendation: "Explain the generational garbage collector with three generations (0, 1, 2). Describe how objects are promoted through generations. Mention that short-lived objects are collected quickly in Gen 0, reducing pause times. Discuss when you might need to optimize GC behavior.",
      tips: [
        "Explain generational garbage collection",
        "Describe Gen 0, Gen 1, and Gen 2",
        "Mention Large Object Heap (LOH)",
        "Discuss GC optimization scenarios"
      ],
      sampleAnswer: "C# uses a generational garbage collector with three generations to optimize memory management. Generation 0 contains short-lived objects and is collected most frequently with minimal pause time. Objects that survive Gen 0 collection are promoted to Generation 1, which is collected less often. Long-lived objects eventually move to Generation 2, collected even less frequently. This design is based on the observation that most objects are short-lived, so collecting Gen 0 frequently is efficient. There's also the Large Object Heap for objects over 85KB, which is part of Gen 2 and isn't compacted by default to avoid costly memory moves. The GC runs automatically when memory pressure occurs or Gen 0 fills up. Most of the time, you don't need to worry about it, but in high-performance scenarios, I've used techniques like object pooling to reduce allocations, and I'm careful with large object allocations. I avoid calling GC.Collect() except in very specific scenarios like after a major operation in a desktop app."
    },
    {
      id: 10,
      category: "Memory Management",
      question: "What is the IDisposable interface and when should you implement it?",
      recommendation: "Explain that IDisposable is for cleaning up unmanaged resources that the GC doesn't handle automatically. Describe the Dispose pattern, using statement, and the difference between disposing and finalizing. Mention common scenarios like database connections, file handles, and network streams.",
      tips: [
        "Explain purpose of IDisposable",
        "Describe proper implementation pattern",
        "Mention 'using' statement",
        "Give examples of resources requiring disposal"
      ],
      sampleAnswer: "IDisposable provides a mechanism to release unmanaged resources that the garbage collector doesn't automatically clean up, like file handles, database connections, or native memory. You implement it when your class holds such resources directly or indirectly. The pattern includes implementing Dispose() to release resources and optionally a finalizer as a safety net. The proper implementation uses a protected virtual Dispose(bool disposing) method to distinguish between managed and unmanaged resource cleanup. The 'using' statement is syntactic sugar that ensures Dispose() is called even if exceptions occur. Common scenarios include classes wrapping database connections, file streams, network sockets, or COM objects. In modern C#, I also use IAsyncDisposable for asynchronous cleanup. It's important to note that you shouldn't implement IDisposable just for managed resources – the GC handles those. I implement it when working with external resources that need explicit cleanup for resource efficiency and preventing resource leaks."
    },
    {
      id: 11,
      category: "Entity Framework & Data Access",
      question: "What's the difference between Entity Framework's Add, Attach, and Update methods?",
      recommendation: "Explain that Add marks an entity as new for insertion, Attach marks an existing entity as unchanged for tracking, and Update marks all properties as modified. Discuss scenarios for each, particularly in disconnected scenarios like web APIs.",
      tips: [
        "Explain entity state tracking",
        "Describe each method's purpose",
        "Discuss connected vs disconnected scenarios",
        "Mention performance implications"
      ],
      sampleAnswer: "These methods control entity state tracking in Entity Framework. Add() marks an entity as 'Added', meaning it will be inserted into the database on SaveChanges(). Attach() is used for existing entities in disconnected scenarios – it marks the entity as 'Unchanged', telling EF to track it without assuming all properties are modified. Update() marks the entity as 'Modified', causing all properties to be updated on SaveChanges(). The choice depends on your scenario. In a web API, when you receive a JSON object representing an existing entity, you might use Attach() if you know only specific properties changed, then manually mark those properties as modified. Or use Update() if you want to update all properties, though this is less efficient if only a few changed. Add() is straightforward for new entities. I typically use Attach() with manual property tracking in disconnected scenarios for better performance, and Update() when I'm certain all properties should be updated. Understanding these is crucial for optimizing database operations in applications with multiple contexts."
    },
    {
      id: 12,
      category: "Entity Framework & Data Access",
      question: "Explain the difference between eager loading, lazy loading, and explicit loading in Entity Framework.",
      recommendation: "Describe each loading strategy: eager (Include), lazy (virtual properties), and explicit (Load method). Discuss the N+1 query problem, when each strategy is appropriate, and performance implications. Mention that lazy loading is disabled by default in EF Core.",
      tips: [
        "Explain each loading strategy",
        "Discuss the N+1 query problem",
        "Mention performance trade-offs",
        "Provide use case examples"
      ],
      sampleAnswer: "Entity Framework offers three loading strategies for related entities. Eager loading uses the Include() method to load related entities in the same query, reducing round trips to the database. For example, context.Orders.Include(o => o.Customer). Lazy loading automatically loads related entities when accessed, which is convenient but can cause the N+1 query problem – one query for the main entity and N queries for related entities. In EF Core, lazy loading is disabled by default and requires explicit configuration. Explicit loading uses the Load() method to manually load related data when needed, giving you control over when the query executes. I prefer eager loading when I know I'll need related data, as it's more efficient with a single query. I avoid lazy loading in most scenarios because the N+1 problem severely impacts performance. Explicit loading is useful when you conditionally need related data based on runtime logic. In APIs, I almost always use eager loading with Include() or projection with Select() to avoid multiple database round trips."
    },
    {
      id: 13,
      category: "Design Patterns",
      question: "Have you implemented the Repository pattern? What are its benefits and potential drawbacks?",
      recommendation: "Explain that Repository pattern abstracts data access, providing a collection-like interface for domain objects. Discuss benefits like testability, abstraction, and centralized data access logic. Also mention drawbacks like added complexity and potential to leak EF concepts through IQueryable.",
      tips: [
        "Explain the Repository pattern purpose",
        "Discuss abstraction and testability benefits",
        "Mention potential over-engineering",
        "Share your experience implementing it"
      ],
      sampleAnswer: "Yes, I've implemented the Repository pattern in several projects. It provides an abstraction layer over data access, presenting a collection-like interface for domain objects. The main benefits are improved testability – you can easily mock repositories in unit tests – separation of concerns, and centralizing data access logic. It also makes it easier to switch data access technologies without affecting business logic. However, there are drawbacks. It can add unnecessary complexity, especially in simple applications where Entity Framework's DbContext already acts as a unit of work. There's also debate about whether repositories should return IQueryable, which can leak EF concepts, or collections, which loses query flexibility. In my experience, the Repository pattern is valuable in complex domains with intricate business logic, especially when combined with the Unit of Work pattern. For simpler CRUD applications, I sometimes skip it to avoid over-engineering. When I do implement it, I'm careful to design the interface thoughtfully, often using methods for common queries rather than exposing IQueryable."
    },
    {
      id: 14,
      category: "Design Patterns",
      question: "Explain Dependency Injection in C# and how it's typically implemented in ASP.NET Core.",
      recommendation: "Describe DI as a technique for achieving Inversion of Control, where dependencies are provided to a class rather than created internally. Explain the three service lifetimes in ASP.NET Core (Transient, Scoped, Singleton). Discuss benefits like testability and loose coupling.",
      tips: [
        "Explain Inversion of Control principle",
        "Describe the three lifetimes: Transient, Scoped, Singleton",
        "Mention constructor injection",
        "Discuss testability benefits"
      ],
      sampleAnswer: "Dependency Injection is a design pattern for implementing Inversion of Control, where objects receive their dependencies from external sources rather than creating them. In ASP.NET Core, it's built-in through the IServiceCollection in the startup configuration. There are three service lifetimes: Transient creates a new instance every time it's requested, suitable for lightweight stateless services. Scoped creates one instance per request, perfect for things like Entity Framework's DbContext. Singleton creates one instance for the application lifetime, used for stateless services or configuration objects. You typically inject dependencies through constructor injection, which makes dependencies explicit and enables testing with mock implementations. The benefits are significant: loose coupling between components, improved testability since you can inject mocks, and better adherence to SOLID principles. I use DI extensively in all layers – controllers depend on services, services depend on repositories, etc. I'm careful to choose the appropriate lifetime to avoid issues like captive dependencies or memory leaks."
    },
    {
      id: 15,
      category: "ASP.NET Core",
      question: "What's the difference between middleware and filters in ASP.NET Core?",
      recommendation: "Explain that middleware operates at the HTTP request pipeline level and can handle any request, while filters are part of the MVC pipeline and operate on actions/controllers. Discuss when to use each – middleware for cross-cutting concerns affecting all requests, filters for MVC-specific logic.",
      tips: [
        "Explain pipeline differences",
        "Describe use cases for each",
        "Mention order of execution",
        "Give practical examples"
      ],
      sampleAnswer: "Middleware and filters operate at different levels of the request pipeline. Middleware is lower-level, sitting in the HTTP request pipeline and processing every request, regardless of whether it reaches MVC. Middleware executes in order of registration and can short-circuit the pipeline. Common uses include authentication, logging, CORS, and exception handling. Filters, on the other hand, are part of the MVC framework and only execute for requests that reach a controller action. There are different filter types: Authorization, Resource, Action, Exception, and Result filters. Filters are useful for cross-cutting concerns specific to MVC, like action-level logging, model validation, or transaction management. I use middleware for application-wide concerns like request logging, security headers, and exception handling. I use filters when I need MVC-specific functionality like validating models, handling exceptions from actions specifically, or implementing action-level caching. For example, I implemented custom middleware for request/response logging and correlation IDs, while using action filters for automatic transaction handling in certain controller actions."
    },
    {
      id: 16,
      category: "ASP.NET Core",
      question: "How do you implement authentication and authorization in ASP.NET Core?",
      recommendation: "Explain the difference between authentication (who you are) and authorization (what you can do). Describe ASP.NET Core Identity for authentication, JWT tokens for APIs, and policy-based authorization. Mention claims-based identity and role-based access control.",
      tips: [
        "Clarify authentication vs authorization",
        "Mention ASP.NET Core Identity",
        "Explain JWT tokens for APIs",
        "Discuss policy-based authorization"
      ],
      sampleAnswer: "Authentication and authorization are distinct concepts. Authentication verifies who you are, while authorization determines what you can do. For authentication, ASP.NET Core provides Identity framework for user management with features like password hashing, two-factor authentication, and account lockout. For APIs, I typically use JWT bearer tokens – the client authenticates and receives a token containing claims, which is sent with subsequent requests. Authorization in ASP.NET Core is policy-based. You can use simple role-based authorization with [Authorize(Roles = \"Admin\")], but I prefer policy-based authorization for flexibility. Policies define requirements that must be met, like requiring specific claims or custom business rules. You register policies in startup and apply them with [Authorize(Policy = \"PolicyName\")]. For example, I've implemented custom authorization handlers that check if a user owns a resource before allowing modifications. I also use claims-based identity where user attributes are stored as claims in the token, allowing fine-grained authorization decisions without database lookups."
    },
    {
      id: 17,
      category: "Testing",
      question: "How do you approach unit testing in C#? What frameworks do you use?",
      recommendation: "Discuss your testing strategy, mentioning frameworks like xUnit, NUnit, or MSTest, and mocking libraries like Moq. Explain what makes a good unit test (fast, isolated, repeatable). Mention the Arrange-Act-Assert pattern and testing best practices.",
      tips: [
        "Mention testing frameworks (xUnit, NUnit, MSTest)",
        "Discuss mocking libraries (Moq, NSubstitute)",
        "Explain Arrange-Act-Assert pattern",
        "Share testing best practices"
      ],
      sampleAnswer: "I follow a comprehensive testing strategy with unit tests as the foundation. I primarily use xUnit for its clean syntax and good support for dependency injection in test fixtures. For mocking, I use Moq to create mock implementations of dependencies. My tests follow the Arrange-Act-Assert pattern: set up test data and mocks, execute the method under test, and assert the expected outcome. I aim for good code coverage but focus on testing behavior rather than implementation details. I write tests that are fast, isolated, and repeatable – they don't depend on databases, external services, or each other. For database-dependent code, I use the Repository pattern to mock data access. I also use test doubles: mocks for verifying interactions, stubs for providing predetermined responses, and fakes for lightweight implementations. I practice TDD when appropriate, especially for complex business logic. My test naming convention clearly describes what's being tested, under what conditions, and expected results, like 'Calculate_WithValidInput_ReturnsCorrectTotal'. I also write integration tests for API endpoints and use in-memory databases for testing data access code."
    },
    {
      id: 18,
      category: "Performance",
      question: "What techniques do you use to optimize performance in C# applications?",
      recommendation: "Discuss various optimization techniques: reducing allocations, using StringBuilder for string operations, async/await for I/O, caching, database query optimization, and profiling. Emphasize measuring before optimizing and avoiding premature optimization.",
      tips: [
        "Mention profiling and measuring first",
        "Discuss specific optimization techniques",
        "Talk about caching strategies",
        "Emphasize database optimization"
      ],
      sampleAnswer: "Performance optimization starts with measurement – I use profilers like dotMemory and dotTrace to identify actual bottlenecks rather than guessing. For memory optimization, I reduce allocations by using span<T> and memory<T> for high-performance scenarios, object pooling for frequently allocated objects, and struct instead of class when appropriate. For strings, I use StringBuilder for concatenation in loops. I use async/await for I/O-bound operations to improve scalability. Database optimization is often the biggest impact – I use eager loading to avoid N+1 queries, add appropriate indexes, use compiled queries in EF Core, and use AsNoTracking() for read-only queries. For caching, I implement distributed caching with Redis for web farms, and memory caching for single-server scenarios, being careful about cache invalidation. I also use response caching for HTTP responses. For CPU-bound operations, I consider parallel processing with Parallel.ForEach or PLINQ. However, I follow the principle of 'measure, don't guess' and avoid premature optimization. Most applications don't need aggressive optimization – clear, maintainable code is more important unless profiling reveals actual bottlenecks."
    },
    {
      id: 19,
      category: "Security",
      question: "What security considerations do you keep in mind when developing C# applications?",
      recommendation: "Discuss common security concerns: SQL injection prevention, XSS, CSRF, secure password storage, input validation, and least privilege principle. Mention using parameterized queries, encoding output, anti-forgery tokens, and ASP.NET Core's built-in security features.",
      tips: [
        "Mention OWASP Top 10 awareness",
        "Discuss SQL injection and XSS prevention",
        "Talk about secure password storage",
        "Mention least privilege principle"
      ],
      sampleAnswer: "Security is a top priority in all my development. I'm familiar with OWASP Top 10 and address each category. For SQL injection, I always use parameterized queries or EF Core, never string concatenation for SQL. For XSS prevention, I rely on Razor's automatic encoding and avoid @Html.Raw unless absolutely necessary with trusted content. I implement CSRF protection using anti-forgery tokens in ASP.NET Core forms. For password storage, I use ASP.NET Core Identity which properly hashes passwords with salt using PBKDF2. I validate and sanitize all user input, never trusting client-side validation alone. I follow the principle of least privilege – granting minimum necessary permissions. For APIs, I implement proper authentication and authorization, use HTTPS exclusively, and implement rate limiting to prevent abuse. I'm careful with sensitive data in logs and error messages – never logging passwords or tokens. I use secure random number generation for tokens. I keep dependencies updated to patch security vulnerabilities and use tools like OWASP Dependency-Check. For sensitive operations, I implement audit logging. I also ensure secure configuration management, never hardcoding secrets and using tools like Azure Key Vault or user secrets in development."
    },
    {
      id: 20,
      category: "Best Practices",
      question: "How do you ensure code quality and maintainability in your C# projects?",
      recommendation: "Discuss code reviews, coding standards, SOLID principles, design patterns, documentation, and automated tooling. Mention static analysis tools, code metrics, and continuous integration practices.",
      tips: [
        "Mention SOLID principles",
        "Discuss code review practices",
        "Talk about automated tooling (analyzers, formatters)",
        "Emphasize readable, self-documenting code"
      ],
      sampleAnswer: "I ensure code quality through multiple practices. I follow SOLID principles religiously – Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. These create maintainable, testable code. I use meaningful names that clearly express intent, keeping methods small and focused on one thing. I participate actively in code reviews, viewing them as learning opportunities. I use static analysis tools like StyleCop and code analyzers, which catch issues at compile time. I configure EditorConfig and code formatting rules so the entire team has consistent style. I write self-documenting code but add comments for 'why' not 'what', and use XML documentation for public APIs. I maintain high test coverage, especially for business logic. I refactor regularly to address technical debt before it accumulates. I use design patterns appropriately – not over-engineering simple solutions but applying patterns like Repository, Factory, or Strategy when they add value. Our CI/CD pipeline runs tests, code analysis, and generates code coverage reports, failing builds that don't meet quality thresholds. I believe clean code is about empathy for future maintainers – writing code that's easy to understand, modify, and extend."
    }
  ];

  const handleNext = () => {
    if (currentQuestionIndex < interviewQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowRecommendation(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowRecommendation(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShowRecommendation = () => {
    setShowRecommendation(true);
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  const currentQuestion = interviewQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / interviewQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4">C# Developer Interview - B2</h1>
          <p className="text-blue-100 text-lg mb-4">
            Practice technical interview questions for C# Developer positions. These questions cover C# fundamentals, .NET Framework, ASP.NET Core, Entity Framework, and best practices.
          </p>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-blue-200 mb-2">
              <span>Progress</span>
              <span>Question {currentQuestionIndex + 1} of {interviewQuestions.length}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-blue-200">
              {answeredQuestions.length} questions reviewed
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6 border border-white/20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-indigo-600/50 rounded-full text-white text-sm font-semibold mb-4">
              {currentQuestion.category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">
              Question #{currentQuestion.id}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-xl p-8 mb-6 border-l-4 border-indigo-400">
            <p className="text-2xl text-white font-medium leading-relaxed">
              "{currentQuestion.question}"
            </p>
          </div>

          {/* Think About Section */}
          <div className="bg-amber-900/30 rounded-xl p-6 mb-6 border border-amber-400/30">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>💭</span> Take a moment to think...
            </h3>
            <ul className="space-y-2 text-amber-100">
              <li>• How would you explain this concept?</li>
              <li>• Can you provide code examples?</li>
              <li>• What are the practical applications?</li>
            </ul>
          </div>

          {/* Show Recommendation Button */}
          {!showRecommendation && (
            <button
              onClick={handleShowRecommendation}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-green-500 hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg"
            >
              Show Recommendation & Sample Answer
            </button>
          )}

          {/* Recommendation Section */}
          {showRecommendation && (
            <div className="space-y-6 animate-fadeIn">
              {/* Main Recommendation */}
              <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-6 border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span>💡</span> How to Answer This Question
                </h3>
                <p className="text-green-100 leading-relaxed">
                  {currentQuestion.recommendation}
                </p>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl p-6 border border-blue-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>✨</span> Key Tips
                </h3>
                <ul className="space-y-2">
                  {currentQuestion.tips.map((tip, index) => (
                    <li key={index} className="text-blue-100 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Answer */}
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎯</span> Sample Answer
                </h3>
                <div className="bg-black/30 rounded-lg p-5 border-l-4 border-purple-400">
                  <p className="text-white leading-relaxed">
                    {currentQuestion.sampleAnswer}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentQuestionIndex === 0
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20'
            }`}
          >
            <span>←</span> Previous
          </button>

          <div className="text-center">
            <div className="text-white font-semibold">
              {currentQuestionIndex + 1} / {interviewQuestions.length}
            </div>
            <div className="text-blue-200 text-sm">
              {Math.round(progress)}% Complete
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === interviewQuestions.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentQuestionIndex === interviewQuestions.length - 1
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg'
            }`}
          >
            Next <span>→</span>
          </button>
        </div>

        {/* Completion Message */}
        {currentQuestionIndex === interviewQuestions.length - 1 && showRecommendation && (
          <div className="mt-6 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-6 border border-green-400/30">
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span>🎉</span> Excellent Work!
            </h3>
            <p className="text-green-100 text-lg">
              You've reviewed all {interviewQuestions.length} C# interview questions! Make sure you can explain these concepts clearly and provide code examples. Good luck with your interview!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobInterviewCSharp;

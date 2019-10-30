

```mermaid
graph TD;
    subgraph Service TD;
        Network---Logic
        Logic---Facade
    end;
    Facade===App
    App===Home
    subgraph Home TD;
        Home---Logo
        Home---AudioPlayer
        Home---Autocomplete
        Home---MenuSofiane
        Home---BreadcrumbSQLI
        Home---Text
        Home---Button
        Home---Footer
    end;

```
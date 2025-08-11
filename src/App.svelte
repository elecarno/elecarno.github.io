<script lang="ts">
  import { Router, type RouteConfig } from '@mateothegreat/svelte5-router';
  import Home from "./routes/home.svelte";
  import Elecarno from "./routes/elecarno.svelte";
  import MonarchAtolla from "./routes/monarchatolla.svelte";
  import McEwan from "./routes/mcewan.svelte";
  import ArkadyOrlunda from "./routes/arkadyorlunda.svelte";

  const routes: RouteConfig[] = [
    {
      component: Home
    },
    {
      path: "elecarno",
      component: Elecarno
    },
    {
      path: "ma",
      component: MonarchAtolla
    },
    {
      path: "mcewan",
      component: McEwan
    },
    {
      path: "ao",
      component: ArkadyOrlunda
    }
  ]
</script>

<Router {routes} prefix="#" />
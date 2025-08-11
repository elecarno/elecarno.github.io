<script lang="ts">
  import { Router, type RouteConfig } from '@mateothegreat/svelte5-router';
  import Home from "./routes/home.svelte";

  import Elecarno from "./routes/elecarno/elecarno.svelte";
  
  import MonarchAtolla from "./routes/ma/monarchatolla.svelte";
  import maAmber from './routes/ma/releases/ma-amber.svelte';

  import McEwan from "./routes/mcewan/mcewan.svelte";

  import ArkadyOrlunda from "./routes/ao/arkadyorlunda.svelte";

  const routes: RouteConfig[] = [
    { component: Home },
    // elecarno ----------------------------------------------------------------
    { path: "elecarno", component: Elecarno },

    // monarch atolla ----------------------------------------------------------
    { path: "ma/*", component: MonarchAtolla },
    // albums & eps
    { path: "ma/amber", component: maAmber },
    { path: "ma/hope", component: maAmber },
    { path: "ma/candle", component: maAmber },
    { path: "ma/brothers", component: maAmber },
    // singles
    { path: "ma/golden", component: maAmber },
    { path: "ma/winter", component: maAmber },
    { path: "ma/classroom", component: maAmber },
    { path: "ma/shimmering", component: maAmber },
    { path: "ma/simile", component: maAmber },
    { path: "ma/heart", component: maAmber },
    { path: "ma/silent", component: maAmber },
    { path: "ma/parallels", component: maAmber },

    // mcewan ------------------------------------------------------------------
    { path: "mcewan", component: McEwan },

    // arkady orlunda ----------------------------------------------------------
    { path: "ao", component: ArkadyOrlunda }
  ]
</script>

<Router {routes} />
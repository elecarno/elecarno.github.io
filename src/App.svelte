<script lang="ts">
  import { Router, type RouteConfig } from '@mateothegreat/svelte5-router';
  import Home from "./routes/home.svelte";

  import Elecarno from "./routes/elecarno/elecarno.svelte";
  
  import MonarchAtolla from "./routes/ma/monarchatolla.svelte";
  import maAmber from './routes/ma/releases/ma-amber.svelte';
  import maHope from './routes/ma/releases/ma-hope.svelte';
  import maCandle from './routes/ma/releases/ma-candle.svelte';
  import maBrothers from './routes/ma/releases/ma-brothers.svelte';
  import maGolden from './routes/ma/releases/ma-golden.svelte';
  import maWinter from './routes/ma/releases/ma-winter.svelte';
  import maClassroom from './routes/ma/releases/ma-classroom.svelte';
  import maShimmering from './routes/ma/releases/ma-shimmering.svelte';
  import maSimile from './routes/ma/releases/ma-simile.svelte';
  import maHeart from './routes/ma/releases/ma-heart.svelte';
  import maSilent from './routes/ma/releases/ma-silent.svelte';
  import maParallels from './routes/ma/releases/ma-parallels.svelte';

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
    { path: "ma/hope", component: maHope },
    { path: "ma/candle", component: maCandle },
    { path: "ma/brothers", component: maBrothers },
    // singles
    { path: "ma/golden", component: maGolden },
    { path: "ma/winter", component: maWinter },
    { path: "ma/classroom", component: maClassroom },
    { path: "ma/shimmering", component: maShimmering },
    { path: "ma/simile", component: maSimile },
    { path: "ma/heart", component: maHeart },
    { path: "ma/silent", component: maSilent },
    { path: "ma/parallels", component: maParallels },

    // mcewan ------------------------------------------------------------------
    { path: "mcewan", component: McEwan },

    // arkady orlunda ----------------------------------------------------------
    { path: "ao", component: ArkadyOrlunda }
  ]
</script>

<Router {routes} />
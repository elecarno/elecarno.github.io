<script lang="ts">
  import { Router, type RouteConfig } from '@mateothegreat/svelte5-router';
  import Home from "./routes/home.svelte";
  import pg404 from "./routes/404.svelte"
  import pgLinks from './routes/links.svelte';

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
  import mc3d from "./routes/mcewan/3d.svelte"
  import mc3dDragonfly from "./routes/mcewan/artworks/dragonfly.svelte"
  import mc3dButterfly from "./routes/mcewan/artworks/butterfly.svelte"
  import mc3dOnTop from "./routes/mcewan/artworks/ontop.svelte"
  import mc3dFighter from "./routes/mcewan/artworks/fighter.svelte"
  import mc3dRobot from "./routes/mcewan/artworks/robot.svelte"
  import mcWriter from './routes/mcewan/writer.svelte';

  import ArkadyOrlunda from "./routes/ao/arkadyorlunda.svelte";

  const routes: RouteConfig[] = [
    { component: Home },
    { path: "/*", component: pg404},
    { path: "/links", component: pgLinks},
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
    { path: "mcewan/3d", component: mc3d },
    { path: "mcewan/3d/dragonfly", component: mc3dDragonfly },
    { path: "mcewan/3d/butterfly", component: mc3dButterfly },
    { path: "mcewan/3d/ontop", component: mc3dOnTop },
    { path: "mcewan/3d/fighter", component: mc3dFighter },
    { path: "mcewan/3d/robot", component: mc3dRobot },
    { path: "mcewan/writer", component: mcWriter },

    // arkady orlunda ----------------------------------------------------------
    { path: "ao", component: ArkadyOrlunda }
  ]
</script>

<Router {routes} />
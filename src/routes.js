import Home from "./routes/home.svelte";
import Elecarno from "./routes/elecarno.svelte";
import MonarchAtolla from "./routes/monarchatolla.svelte";
import McEwan from "./routes/mcewan.svelte";
import ArkadyOrlunda from "./routes/arkadyorlunda.svelte";

export default {
    "/": Home,
    "/elecarno": Elecarno,
    "/monarchatolla": MonarchAtolla,
    "/mcewan": McEwan,
    "/arkadyorlunda": ArkadyOrlunda
}
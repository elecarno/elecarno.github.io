<script lang="ts">
    import Album from "../album.svelte";
    import md1 from "../lyrics/parallels.md?raw"
    import md2 from "../lyrics/brother-by-heart.md?raw"
    import md3 from "../lyrics/brother-by-mind.md?raw"
    import md4 from "../lyrics/end-of-the-beginning.md?raw"
    import md5 from "../lyrics/thought-rewind.md?raw"
    import md6 from "../lyrics/friends-in-the-interlude.md?raw"
    import md7 from "../lyrics/ey-boy.md?raw"
    import md8 from "../lyrics/brother-by-time.md?raw"
    import md9 from "../lyrics/when-silent-was-joy.md?raw"
    import md10 from "../lyrics/we-talked-of-peace.md?raw"

    let tracks = [
        {
            "name": "Parallels",
            "duration": "4:02",
            "lyrics": md1
        },
        {
            "name": "Brother by Heart",
            "duration": "4:44",
            "lyrics": md2
        },
        {
            "name": "Brother by Mind",
            "duration": "3:34",
            "lyrics": md3
        },
        {
            "name": "End of the Beginning",
            "duration": "4:29",
            "lyrics": md4
        },
        {
            "name": "Thought Rewind",
            "duration": "2:11",
            "lyrics": md5
        },
        {
            "name": "Friends in the Interlude",
            "duration": "3:39",
            "lyrics": md6
        },
        {
            "name": "Ey, Boy?",
            "duration": "3:14",
            "lyrics": md7
        },
        {
            "name": "Brother by Time",
            "duration": "3:13",
            "lyrics": md8
        },
        {
            "name": "When Silent Was Joy",
            "duration": "4:02",
            "lyrics": md9
        },
        {
            "name": "We Talked of Peace",
            "duration": "2:04",
            "lyrics": md10
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=b_IhNVL1YWc&list=OLAK5uy_lQ8o_6Bo-FJVEa2kiK6dF6KqQBf3qWZzU",
        "sp": "https://open.spotify.com/album/1O9xeZhBlIJCU3ZUbk4H1X",
        "it": "https://music.apple.com/us/album/brothers-at-the-end-of-an-era/1694202095"
    }
</script>

<Album
    name="Brothers at the <br> End of an Era"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b2735a964f5c30352282e9d15fae"
    links={links}
    release="2023.05.13"
/>

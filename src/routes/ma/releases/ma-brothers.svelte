<script lang="ts">
    import Album from "../album.svelte";
    let tracks = [
        {
            "name": "Parallels",
            "duration": "4:02"
        },
        {
            "name": "Brother by Heart",
            "duration": "4:44"
        },
        {
            "name": "Brother by Mind",
            "duration": "3:34"
        },
        {
            "name": "End of the Beginning",
            "duration": "4:29"
        },
        {
            "name": "Thought Rewind",
            "duration": "2:11"
        },
        {
            "name": "Friends in the Interlude",
            "duration": "3:39"
        },
        {
            "name": "Ey, Boy?",
            "duration": "3:14"
        },
        {
            "name": "Brother by Time",
            "duration": "3:13"
        },
        {
            "name": "When Silent Was Joy",
            "duration": "4:02"
        },
        {
            "name": "We Talked of Peace",
            "duration": "2:04"
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

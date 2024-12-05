
const albumLinks = {
    'Silent Hill 1': 'https://youtube.com/playlist?list=PLvknaMBlC64hztXIhZZf-ZQueCNLJAB6w&si=MYSg2iA3e6zHSzhS',
    'Silent Hill 2': 'https://youtube.com/playlist?list=OLAK5uy_lCmbD75XUtYnmI1rKLabzho0dL9tr-L_Y&si=nUKbJQeOG3FrHzHZ',
    'Silent Hill 3': 'https://youtube.com/playlist?list=OLAK5uy_nS6fCOiLrPp2y377TR36fMi_TRLSolB84&si=aYMTQl70yrrU3bQG',
    'Silent Hill 4': 'https://youtube.com/playlist?list=OLAK5uy_kkB9YddR0GvOtJWSK1NEOFATDzvnqbcXk&si=td8BbtsGiyMsHRHU',
    'Silent Hill: Origins': 'https://youtube.com/playlist?list=PLOEAs04auvicnFmMWlbfCnk8s_ovb9EPV&si=sE6HHLMrz0v6Zcvq',
    'Silent Hill: Shattered Memories': 'https://youtube.com/playlist?list=PLE1EF37C25DEF0761&si=lMxPxZwLGK-No8y1',
};

function openYouTube(album) {
    const link = albumLinks[album];
    if (link) {
        window.open(link, '_blank');
    } else {
        console.error('No link found for the specified album:', album);
    }
}

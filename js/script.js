
const albumLinks = {
    'Silent Hill 1': 'https://youtu.be/mdqNshgDwtQ?si=qkZs3pHIx3hs8QF5',
    'Silent Hill 2': 'https://youtube.com/playlist?list=OLAK5uy_lCmbD75XUtYnmI1rKLabzho0dL9tr-L_Y&si=nUKbJQeOG3FrHzHZ',
    'Silent Hill 3': 'https://youtube.com/playlist?list=OLAK5uy_nS6fCOiLrPp2y377TR36fMi_TRLSolB84&si=aYMTQl70yrrU3bQG',
    'Silent Hill 4': 'https://youtube.com/playlist?list=OLAK5uy_kkB9YddR0GvOtJWSK1NEOFATDzvnqbcXk&si=td8BbtsGiyMsHRHU',
};

function openYouTube(album) {
    const link = albumLinks[album];
    if (link) {
        window.open(link, '_blank');
    } else {
        console.error('No link found for the specified album:', album);
    }
}

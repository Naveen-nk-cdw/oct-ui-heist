import { atom } from "recoil";
import badAssVideo from '../assets/videos/video1.mp4';
import imageOnePiece from '../assets/images/image1.webp';
import imageRengoku from '../assets/images/image2.png';
import imageMha from '../assets/images/image3.jpeg';
import arjunDasVideo from '../assets/videos/video2.mp4';

export const tvVolumeAtom = atom({
    key: "tvVolumeAtom",
    default: 15,
})

export const tvChannelAtom = atom({
    key: "tvChannelAtom",
    default: 1,
})

export const powerSwitchAtom = atom({
    key: "powerSwitchAtom",
    default: false
})

export const channelDataAtom = atom({
    key: "channelDataAtom",
    default: [
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : true
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : true
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : imageOnePiece,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : badAssVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageRengoku,
            mediaType : "image",
            isSubscribed : false
        },
        {
            source : arjunDasVideo,
            mediaType : "video",
            isSubscribed : false
        },
        {
            source : imageMha,
            mediaType : "image",
            isSubscribed : false
        }
    ]
})
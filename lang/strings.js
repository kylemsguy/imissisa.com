const AllStrings = {}

// To add a new language, copypaste starting from this line...
AllStrings["en"] = {
    CommonMetadata: {
        HeaderSMTitle: "I MISS S.S. ISA",
        FooterText: "Not affiliated with S.S. Isa - Past stream data provided by Holodex - {0}",
        FooterSourceLink: "Source",
        FooterStreamerLink: "S.S. Isa"
    },

    Main: {
        PageTitle: "I MISS S.S. ISA",
        DontMissCaption: "I Don't Miss S.S. Isa",
        ImageAlt: "Meme",
        RandomVodLink: "Do your reps",
        ErrorMessageChannelLink: "You can check Isa's channel yourself",
        ErrorOccurred: "There was a problem checking stream status. {0}!",
        Embed: {
            TextLive: "Streaming: {0}",
            TextStartingSoon: "Starting Soon: {0}",
            TextStreamQueued: "Next Stream: {0}",
        }
    },

    VideoBox: {
        StatusLive: "LIVE",
        StatusStartingSoon: "Starting Soon",
        StatusStreamQueued: "Next Stream",
        NoStreamDummyStatus: "Current Stream",
        NoStreamDummyTitle: "NOTHING UUUUUUUuuuuuu",
        MembersOnlySubtext: "(for Seadogs only!)",
        ThumbnailAltText: "Video Thumbnail"
    },

    Reps: {
        PageTitle: "Do your reps!",
        SMMetaDescription: "Get a random S.S. Isa VOD to watch!",
        VodInfoUploadDate: "Streamed or uploaded on {0}",
        PageCaption: "Watch this one!",
        RerollButton: "Reroll",
        BackToStreamTrackerButton: "Back to stream tracker",
        ErrorDescription: "A problem occurred while getting a random video: {0}",

        ErrorCodes: {
            NO_VIDEO_FOUND: "No video found."
        },
    },

    Countdowns: {
        VideoBox: {
            immediate: "(Now!)",
            forFuture: "(in %@)",
            forPast: "(%@ ago)",
            days: "%@d",
            hours: "%@h",
            minutes: "%@m",
            seconds: "%@s",
            separator: " ",
        },
        PastStream: {
            immediate: "",
            forFuture: "",
            forPast: `%@ without S.S. Isa`,
            days: (days) => (days > 1 ? `${days} days` : `${days} day`),
            hours: (hours) => (hours > 1 ? `${hours} hours` : `${hours} hour`),
            minutes: (minutes) => (minutes > 1 ? `${minutes} minutes` : `${minutes} minute`),
            seconds: (seconds) => (seconds > 1 ? `${seconds} seconds` : `${seconds} second`),
            separator: ", "
        }
    },
    FormatDateShort: (date) => date.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"})
}
// ...down to this line.

export default AllStrings
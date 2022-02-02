
const FILE_TYPE_IMAGES = [
    'image/jpeg',
    'image/gif',
    'image/bmp',
    'image/png'
];

const FILE_TYPE_DOCUMENT = [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.oasis.opendocument.text',
    'application/rtf'
];
const FILE_TYPE_SPREADSHEET = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.oasis.opendocument.spreadsheet'
];
const FILE_TYPE_PRESENTATION = [
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.oasis.opendocument.presentation'
];
const FILE_TYPE_VIDEO = [
    'video/mpeg',
    'video/x-msvideo',
    'video/mp4',
    'application/x-mpegURL',
    'video/MP2T',
    'video/3gpp',
    'video/quicktime',
    'video/x-ms-wmv'
];
const FILE_TYPE_AUDIO = ['audio/mpeg'];
const FILE_TYPE_ACROBAT = ['application/pdf'];
const FILE_TYPE_TEXT = ['text/plain'];
const FILE_TYPE_DATA = [
    'text/csv',
    'application/json',
    'text/xml'
]
const FILE_TYPE_COMPRESSED = [
    'application/gzip',
    'application/vnd.rar',
    'application/zip',
    'application/x-zip-compressed',
    'application/x-7z-compressed'
//    'application/octet-stream'
];



module.exports = Object.freeze({
    PAGE_SIZE: 15,

    URL_ATTACHMENT_FILE : '/attachment/',

    FILE_TYPE_IMAGES,
    FILE_TYPE_DOCUMENT,
    FILE_TYPE_SPREADSHEET,
    FILE_TYPE_PRESENTATION,
    FILE_TYPE_VIDEO,
    FILE_TYPE_AUDIO,
    FILE_TYPE_ACROBAT,
    FILE_TYPE_TEXT,
    FILE_TYPE_DATA,
    FILE_TYPE_COMPRESSED,

    ACCEPTED_FILES: [
        ...FILE_TYPE_IMAGES,
        ...FILE_TYPE_DOCUMENT,
        ...FILE_TYPE_SPREADSHEET,
        ...FILE_TYPE_PRESENTATION,
        ...FILE_TYPE_VIDEO,
        ...FILE_TYPE_AUDIO,
        ...FILE_TYPE_ACROBAT,
        ...FILE_TYPE_TEXT,
        ...FILE_TYPE_DATA,
        ...FILE_TYPE_COMPRESSED
    ]

})
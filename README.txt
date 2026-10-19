BIRTHDAY WEBSITE — QUICK GUIDE
==============================

Files:
- index.html      Home page + automatic birthday popup
- gallery.html    Photo gallery
- moments.html    Special memories with descriptions
- videos.html     Voice-note player and video placeholders
- sorry.html      Gentle apology page
- letter.html     Birthday letter
- style.css       All styling, animations and responsive layout
- script.js       Popup, floating emojis, mobile navigation, confetti/reveal animations
- assets/         Put your own audio/video/photo files here

HOW TO PREVIEW
1. Extract the ZIP file.
2. Open index.html in Chrome.
3. Internet is needed for the Google Fonts and online sample photos.
4. Each navigation item opens a separate HTML page.

HOW TO CHANGE PHOTOS
Replace any sample image URL in the HTML with a local path, for example:
<img src="assets/your-photo.jpg" alt="Our photo">
Then place your photo inside the assets folder.
You can add as many gallery figures as you want by copying a <figure class="gallery-item">...</figure> block.

VOICE NOTE
Put your MP3 file in assets/ and name it:
my-voice-note.mp3
The player is already connected to that path.

VIDEOS
Put MP4 files inside assets/ and name them:
video-1.mp4
video-2.mp4
Or change the src paths in videos.html to your own filenames.

SPECIAL MOMENTS
Open moments.html and replace each moment's image, heading and paragraph with your own photo, title and story. Copy an entire <article class="moment-card"> block to add more moments.

PERSONALIZE THE WORDING
Search the HTML files for “my favourite person”, “your person”, and sample text, then change it to your own style. The apology is intentionally gentle and does not pressure the recipient to forgive or reply.

PUBLISH ON GITHUB PAGES
Upload all HTML files, style.css, script.js and the assets folder to the same repository. Keep filenames and paths exactly the same. In repository Settings > Pages, publish from your main branch/root folder.

IMPORTANT
The images currently included are online placeholder photos, not your personal photos. Replace them before sharing if you want the website to feel personal. The audio/video players won't have your media until you add the files. No backend is needed.

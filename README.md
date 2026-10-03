## Project Structure

```text
food/
│
├── index.html              # Main homepage (entry point)
├── about.html              # About page (project team and introduction)
├── bac.html                # Northern region cuisine
├── trung.html              # Central region cuisine
├── nam.html                # Southern region cuisine
│
├── style.css               # Root master stylesheet (imports modular CSS)
│
├── css/                    # Stylesheet directory (organized by responsibility)
│   ├── common.css          # Shared global styles (reset, typography, navbar, footer)
│   ├── home.css            # Styles specific to index.html
│   ├── about.css           # Styles specific to about.html
│   ├── region.css          # Shared styles for regional pages (bac, trung, nam)
│   ├── trung.css           # Unique styles for trung.html
│   └── nam.css             # Unique styles for nam.html
│
└── assets/                 # Static media directory (images, SVGs, vectors)
    ├── bac/                # Media specifically for Northern cuisine
    ├── trung/              # Media specifically for Central cuisine
    ├── nam/                # Media specifically for Southern cuisine
    ├── members/            # Team member portraits
    └── *.jpg, *.svg, ...   # Shared banners, background images, and national map assets
```
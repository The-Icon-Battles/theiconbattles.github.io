// Navbar
document.querySelectorAll('.nav-toggler').forEach((toggler) => {
	toggler.addEventListener('click', (e) => {
		const target = document.querySelector(e.currentTarget.dataset.target);
	
		if (target.classList.contains('hidden')) {
			target.classList.remove('hidden');
			target.classList.add('flex');
			return;
		}
		target.classList.remove('flex');
		target.classList.add('hidden');
	});
});

// Dropdown
document.querySelectorAll('.dropdown').forEach((dropdown) => {
	dropdown.querySelector('button.dropdown-toggler').addEventListener('click', () => {
		dropdown.querySelector('.dropdown-content').classList.toggle('hidden');
	});
});

// Changelog
// TODO: enable changelog and show data from Steam
const changelogSampleContent = `# Changelog
All notable changes to this project will be documented in this file

## 0.11.2 (2022-08-05)
### Changed
- Update [WindowsDesktopGrabber](https://github.com/ShcherbaDev/windows-desktop-grabber/commit/5b7d6ca) - fix System.ArgumentException on Windows 7 and update framework to .NET 6
- Fix bug when all the icons had shortcut overlay
- Application author to "Crutishnyk"

## 0.11.1 (2022-08-03)
### Added
- "About" section in app settings
- Application logo

### Changed
- Fix application window bug on running without \`--screensaver\` argument
- Fix Fighter's overlay visibility bug

## 0.11.0 (2022-08-01)
### Added
- Fighter's health
- Fighters can now die (but will resurrect in a minute)

### Changed
- WindowsDesktopGrabber icons are now generating in the app's \`AppData/LocalRow\` folder

## 0.10.0 (2022-07-30)
### Added
- Walk animation for the Roaming and Chase states

## 0.9.0 (2022-07-29)
### Added
- Screensaver for Windows. It autostarts the app with \`--screensaver\` option. But it may conflict with the native Windows screensaver so it is recommended to disable native Windows screensaver to make it work properly
- \`--screensaver\` argument which hides the app's overlay and hides the app on user action
- Save of the settings data
- Native Windows screensaver conflict warning

### Changed
- WindowsDesktopGrabber now doesn't create a command line window on start

## 0.8.0 (2022-07-20)
### Added
- Controls overlay where you can close the app or open settings

## 0.7.6 (2022-07-19)
### Changed
- Fighters are now approaching each other before the attack
- Animations root transform properties

## 0.7.5 (2022-07-19)
### Added
- Fighter's scaling to real icon size

### Changed
- Fix infinite chase bug which happened randomly

### Removed
- \`mock-desktop.png\` file

## 0.7.4 (2022-07-16)
### Added
- New attack animation

### Changed
- Fixed Fighter's center position on animations (root motion)

## 0.7.3 (2022-07-11)
### Changed
- Fixed bug when Fighter ignores other attacks when Fighter is already reacting to one

## 0.7.2 (2022-07-10)
### Changed
- Settings UI

## 0.7.1 (2022-07-09)
### Added
- \`shortcut_overlay_256x256.png\` file for testing purposes
- System shortcut overlay from [WindowsDesktopGrabber](https://github.com/ShcherbaDev/windows-desktop-grabber)

### Changed
- Update [WindowsDesktopGrabber](https://github.com/ShcherbaDev/windows-desktop-grabber/commit/9f1fd9b)

### Removed
- \`chrome.png\` file
- \`win10_shortcut_overlay_arrow.png\` file

## 0.7.0 (2022-07-08)
### Added
- \`--ignore-virtual-folders\` parameter for [WindowsDesktopGrabber](https://github.com/ShcherbaDev/windows-desktop-grabber) instance
- Fighter's canvas is now hiding during a fight
- InactiveState is now the default state of a Fighter
- \`Director\` class which activates random Fighter every few seconds
- Collision on the borders of the screen so Fighters can't leave the scene
- Collision for Fighters (for screen borders only)
- More proper spawn of Fighter's

### Changed
- Update [WindowsDesktopGrabber](https://github.com/ShcherbaDev/windows-desktop-grabber/commit/0eee2df)
- Fix Fighter's movement trajectory during chasing
- Damage animation in \`Kicking\` attack
- \`Segoe UI\` font to a system one
- Unity's default text system to TextMeshPro for a Fighter

### Removed
- Fighter scaling hotkeys
- WebBackground scene
- Shortcut arrow overlay (temporarily)

## 0.6.1 (2022-06-22)
### Added
- Blocks and dodges
- Root motion for Fighters
- Fighters are now coming up to each other during a fight

### Changed
- Fighter's structure
- Update [WindowsDesktopGrabber](https://github.com/ShcherbaDev/windows-desktop-grabber/commit/66f1fc7)

## 0.6.0 (2022-06-11)
### Added
- Smooth attack reactions
- 6 melee attacks
- Applying actual icon images (except the system ones)

### Changed
- Fighter's limbs position
- Fix incorrect behaviour in EnemyDetector.GetDistanceToLatestEnemy
- Update WindowsDesktopGrabber

### Removed
- "Attack_Brutal Assassination" animation 

## 0.5.2 (2022-04-13)
### Added
- Separated Windows Data Grabber module
- Background styling that matches the real one

### Changed
- Fix Fighters spawn position

### Removed
- Hurricane Kick attack animation
- Unused code

## 0.5.1 (2022-04-01)
### Added
- Windows 10's shortcut overlay arrow
- Google Chrome and Internet Explorer icons for demo purposes

### Changed
- Downgrade Unity Editor version back to 2020.3.25f1
- Fix animation errors in build version
- Fix \`2\` hotkey for going to test scene

### Removed
- **Extracting desktop icons right in a Unity app.** This approach had limitations, so this will do a separate module
- System.Drawing.dll and User32.dll

## 0.5.0 (2022-02-20)
### Added
- System.Drawing.dll library
- FightDirector (again)

### Changed
- Fighter's limbs are now closer to the icon edge
- Refactor Fighter AI

### Removed
- Random type selection for Fighters

## 0.4.0 (2022-02-07)
### Added
- Melee combat (WIP)
- Settings menu (WIP)
- \`F1\` hotkey for opening/closing settings

## 0.3.0 (2022-01-22)
### Added
- 3D Fighter model
- Turning the Fighter's limbs towards the target
- \`1\`, \`2\` hotkeys for loading different scenes
- "Fight Director"

### Changed
- Waypoints are now fully invisible
- All existing fighter's scripts made to work in 3D
- Fix a bug when Fighter could get stuck in a one place

### Removed
- 2D Fighter
- Google Chrome icon
- Enemy chasing

## 0.2.3 (2022-01-07)
### Added
- Idle animation for Fighter

## 0.2.2 (2022-01-05)
### Added
- \`Delete\`, \`KeypadPlus\`, \`KeypadMinus\` hotkeys
- Hotkey section in [README.md](README.md#Hotkeys)

### Changed
- Fighter label's font to "Segoe UI"

### Removed
- Unused layer in Fighter.psb

## 0.2.1 (2022-01-04)
### Changed
- Filtering icons that are outside user's screen

## 0.2.0 (2022-01-04)
### Added
- Fighters creation depending on user's desktop (Windows only)
<br /><img src="https://i.ibb.co/KDfmyGM/0-0-3-desktop-handling-min.jpg" style="max-width: 400px" alt="It works but requires improvement" />

### Removed
- Fighters movement (temporarily disabled)

## 0.1.1 (2021-12-26)
### Changed
- Fighter prefab is now using skeleton animation.
- Made waypoints invisible.

### Removed
- IconAtlas.png file

## 0.1.0 (2021-12-25)
### Added
- Generation of random waypoints on screen.
- Fighters movement to random waypoints.
- Creation a new fighter on random position by pressing \`space\`.
- Simple detection of other fighters and moving to each other.
- Showing of a user's desktop wallpaper on Windows as a background (temporary disabled).
- Invisible walls on the edges of screen.
`;

const renderer = new marked.Renderer();
renderer.heading = (text, level, raw, slugger) => {
    // Get version release date and apply <small> tag to it
    if (level === 2) {
        const releaseDateMatch = text.match(/^([\s\S]+?)(\(.*\))?$/);
        if (releaseDateMatch[2]) {
            releaseDateMatch[2] = `<small>${releaseDateMatch[2]}</small>`;
            text = releaseDateMatch.slice(1).join('');
        }
    }

    switch (level) {
        case 2:
            return `<h${level} class="version-title">${text}</h${level}>`;

        case 3:
            return `<div class="card flex-same-width"><h${level}>${text}</h${level}>`;

        default:
            return `<h${level}>${text}</h${level}>`;
    }
};

renderer.list = (body, ordered, start) => {
    return `<ul style="word-break: break-word;">${body}</ul></div>`;
};

const changelogData = marked.lexer(changelogSampleContent);
const latestVersionIndex = changelogData.findIndex(
    (it) => it.type === 'heading' && it.depth === 2
);
const previousVersionsStartIndex = changelogData
    .slice(latestVersionIndex + 1)
    .findIndex((it) => it.type === 'heading' && it.depth === 2);
const previousVersionsData = changelogData.slice(
    previousVersionsStartIndex + (latestVersionIndex + 1)
);

// Change text for first version - add "Latest version"
changelogData[latestVersionIndex].tokens[0].text = `Latest version - ${changelogData[latestVersionIndex].tokens[0].text}`;

/*
document.querySelector('#latest-version').innerHTML = DOMPurify.sanitize(
    marked.parser(changelogData.splice(latestVersionIndex, previousVersionsStartIndex), { renderer })
);

document.querySelector('#all-versions').innerHTML = DOMPurify.sanitize(
    marked.parser(previousVersionsData, { renderer })
);
*/

const nextUntil = (searchElem, ignoreSelector) => {
	let result = [[]];

	while (searchElem !== null) {
		if (searchElem.tagName !== ignoreSelector) {
			result[result.length-1].push(searchElem);
		}
		else {
			result.push([]);
		}
		searchElem = searchElem.nextSibling;
	}

	return result;
}

// Layout fix for version changes
document.querySelectorAll('.versions-container').forEach((container) => {
	const changeBlocks = nextUntil(container.querySelector('.card'), 'H2');
	changeBlocks.forEach((it) => {
		if (it.length > 0) {
			const container = document.createElement('div');
			container.classList.add('version-content');
			it[0].parentNode.insertBefore(container, it[0].nextSibling);
			it.forEach((el) => {
				container.appendChild(el);
			});
		}
	});
});

// Modals
document.querySelectorAll('[data-modal-link-id]').forEach((it) => {
	it.addEventListener('click', (event) => {
		document.querySelectorAll('.modal').forEach((modal) => {
			if (modal.dataset.modalId === event.target.dataset.modalLinkId) {
				modal.classList.add('active');
				return;
			}
			modal.classList.remove('active');
		});

		document.body.style.overflow = 'hidden';
	});
});

document.querySelectorAll('.modal').forEach((it) => {
	it.addEventListener('click', ({ target }) => {
		if (
			target.classList.contains('modal')
			|| target.classList.contains('modal__container')
			|| target.classList.contains('modal__close')
		) {
			document.querySelectorAll('.modal').forEach((modal) => {
				modal.classList.remove('active');
			});
			document.body.style.overflow = 'visible';
		}
	});
});

// IntersectionObserver
const appearFromLeftObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('lg:animate-appear-from-left');
			entry.target.classList.remove('opacity-0');
		}
	});
}, { rootMargin: '-100px' });

const appearFromRightObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('lg:animate-appear-from-right');
			entry.target.classList.remove('opacity-0');
		}
	});
}, { rootMargin: '-100px' });

document.querySelectorAll('.anim-left-observer').forEach(element => {
	appearFromLeftObserver.observe(element);
});
document.querySelectorAll('.anim-right-observer').forEach(element => {
	appearFromRightObserver.observe(element);
});

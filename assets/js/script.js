window.onload = (function () {
	//выбор языка по браузеру, обрезаются первые 2 символа и закидывается
	//в локалсторейдж
	var language = window.navigator ? (window.navigator.language ||
		window.navigator.systemLanguage ||
		window.navigator.userLanguage) : "ru";
	language = language.substr(0, 2).toLowerCase();
	localStorage.setItem('lang', language);

	let htmlLang = document.querySelector('#language')
	htmlLang.setAttribute('value', language)

	var $html = $('html'),
		$currLang = $('.curr_lang'),
		lang = localStorage.lang,
		langList = ['en', 'de',
			//  'pt', 'pl', 'ru', 'fi', 'es', 'ro', 'hu', 
			'fr',
			//  'jp', 'in', 'cz', 'vn', 'ph', 'th', 'lt', 'lv', 'default'
		];

	if (!lang) {
		// default lang
		var countryToLang = {
			'en': 'en',
			// 'br': 'pt',
			// 'pt': 'pt',
			'de': 'de',
			// 'pl': 'pl',
			// 'ru': 'ru',
			// 'fi': 'fi',
			// 'es': 'es',
			// 'ro': 'ro',
			// 'hu': 'hu',
			'fr': 'fr',
			// 'ca': 'en',
			// 'jp': 'jp',
			// 'by': 'en',
			// 'az': 'en',
			// 'am': 'en',
			// 'ge': 'en',
			// 'md': 'en',
			// 'mn': 'en',
			// 'tm': 'en',
			// 'kg': 'en',
			// 'tj': 'en',
			// 'kz': 'ru',
			// 'cl': 'es',
			// 'pe': 'es',
			// 'mx': 'es',
			// 'co': 'es',
			// 'ph': 'ph',
			// 'vn': 'vn',
			// 'th': 'th',
			// 'in': 'en',
			// 'no': 'en',
			// 'se': 'en',
			// 'lt': 'lt',
			// 'lv': 'lv',
			// 'cz': 'cz',
			'default': 'en'
		};
		var country = $html.attr('data-country'),
			lang = countryToLang[country] || countryToLang['default'];
		localStorage.lang = lang;
	}

	if ($html.attr('data-country') === 'ca') {
		$html.addClass('cur_cad');
	}
	if ($html.attr('data-country') === 'in') {
		$html.addClass('cur_inr');
	}
	if ($html.attr('data-country') === 'no') {
		$html.addClass('cur_nok');
	}
	if ($html.attr('data-country') === 'se') {
		$html.addClass('cur_sek');
	}
	if ($html.attr('data-country') === 'br') {
		$html.addClass('cur_brl');
	}
	if ($html.attr('data-country') === 'co') {
		$html.addClass('cur_cop');
	}
	if ($html.attr('data-country') === 'mx') {
		$html.addClass('cur_mxn');
	}
	if ($html.attr('data-country') === 'pe') {
		$html.addClass('cur_pen');
	}
	if ($html.attr('data-country') === 'cl') {
		$html.addClass('cur_clp');
	}
	if ($html.attr('data-country') === 'by' ||
		$html.attr('data-country') === 'az' ||
		$html.attr('data-country') === 'am' ||
		$html.attr('data-country') === 'ge' ||
		$html.attr('data-country') === 'md' ||
		$html.attr('data-country') === 'mn' ||
		$html.attr('data-country') === 'tm' ||
		$html.attr('data-country') === 'kg' ||
		$html.attr('data-country') === 'tj'
	) {
		$html.addClass('cur_usd');
	}

	langList.forEach(function (element) {
		$html.removeClass(element).addClass(lang);
	});


	$('.lang_list_item[data-lang="' + lang + '"]')
		.addClass('curr')
		.siblings()
		.removeClass('curr');
	$currLang.html($('.lang_list_item[data-lang="' + lang + '"]').html());

	var langListData = 0;

	for (i = 0; i < langList.length; i++) {
		if (lang === langList[i]) {
			langListData = 1;
		}
	}

	if (langListData === 0) {
		$html.removeClass();
		$html.addClass('en');
		lang = 'en';
		$currLang.html($('.lang_list_item[data-lang="' + lang + '"]').html());
	}


	(function () {
		const items = [
			{
				id: 0,
				src: 'assets/img/case.gif',
				srcMob: 'assets/img/case-mob.gif',
				srcLoose: 'assets/img/case-lose.png',
				srcWin: 'assets/img/case-win.png',
				winner: false
			},
			{
				id: 1,
				src: 'assets/img/case.gif',
				srcMob: 'assets/img/case-mob.gif',
				srcLoose: 'assets/img/case-lose.png',
				srcWin: 'assets/img/case-win.png',
				winner: false
			},
			{
				id: 2,
				src: 'assets/img/case.gif',
				srcMob: 'assets/img/case-mob.gif',
				srcLoose: 'assets/img/case-lose.png',
				srcWin: 'assets/img/case-win.png',
				winner: false
			},
			{
				id: 3,
				src: 'assets/img/case.gif',
				srcMob: 'assets/img/case-mob.gif',
				srcLoose: 'assets/img/case-lose.png',
				srcWin: 'assets/img/case-win.png',
				winner: false
			},
			{
				id: 4,
				src: 'assets/img/case.gif',
				srcMob: 'assets/img/case-mob.gif',
				srcWin: 'assets/img/case-win.png',
				winner: true
			},
			{
				id: 5,
				src: 'assets/img/case.gif',
				srcMob: 'assets/img/case-mob.gif',
				srcLoose: 'assets/img/case-lose.png',
				srcWin: 'assets/img/case-win.png',
				winner: false
			},
		];

		const doors = document.querySelectorAll('.door');
		const spinBtn = document.querySelector('#spinner');
		const moveFinger = document.querySelectorAll('.moove-finger-anim');
		const attemptsCounter = document.querySelectorAll('.atCount');
		const overlay = document.querySelector('.modal-overlay');
		const wrapper = document.querySelector('.modal-wrapper');
		const modal = document.querySelector('.modal');
		const container = document.querySelector('.fireworks');
		const sound = document.querySelector('.sound')
		const fireworks = new Fireworks.default(container, {
			autoresize: true,
			opacity: 0.5,
			acceleration: 1.45,
			friction: 0.97,
			gravity: 1.5,
			particles: 200,
			traceLength: 1,
			traceSpeed: 10,
			explosion: 10,
			intensity: 30,
			flickering: 50,
			lineStyle: 'round',
			hue: {
				min: 0,
				max: 360
			},
			delay: {
				min: 30,
				max: 60
			},
			rocketsPoint: {
				min: 50,
				max: 50
			},
			lineWidth: {
				explosion: {
					min: 1,
					max: 10
				},
				trace: {
					min: 1,
					max: 1
				}
			},
			brightness: {
				min: 50,
				max: 80
			},
			decay: {
				min: 0.015,
				max: 0.03
			},
			mouse: {
				click: false,
				move: false,
				max: 1
			},
			// sound: {
			// 	enabled: true
			// }
		});

		// let macAudio = document.querySelector('#mac')
		// window.addEventListener('click', () => {
		// 	macAudio.load();
		// })
		// window.addEventListener('touchstart', () => {
		// 	macAudio.load();
		// })

		let macAudio = new Audio();
		macAudio.autoplay = true;
		macAudio.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
		macAudio.src = 'assets/audio/win.mp3';

		let macBGSound = new Audio();
		macBGSound.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
		macBGSound.src = 'assets/audio/bg-sound.mp3';
		macBGSound.volume = 0.2;
		macBGSound.loop = true;
		macBGSound.load();

		let spinSound = new Audio();
		spinSound.src = 'assets/audio/spin.mp3';
		spinSound.load();

		let atCount = 2;
		let disabled = false;

		spinBtn.addEventListener('click', spin);
		sound.addEventListener('click', toggleSound)

		let generalBoxesClone,
			poolHeight,
			boxHeight,
			spinCount = 1;

		function toggleSound() {
			sound.classList.toggle('on');
			if (sound.classList.contains('on')) {
				sound.src = 'assets/img/sound-on.svg'
				macBGSound.play();
			} else {
				sound.src = 'assets/img/sound-off.svg';
				macBGSound.pause();
			}
		}

		function init(groups = 0, duration = 3) {
			let i = 0;
			const pool = [];
			const arr = [...items];
			pool.push(...shuffle(arr));

			for (const door of doors) {
				const boxes = door.querySelector('.boxes');
				const boxesClone = boxes.cloneNode(false);


				poolLength = pool.length

				boxesClone.addEventListener(
					'transitionstart',
					function () {
						door.dataset.spinned = '1';
						this.querySelectorAll('.box').forEach((box) => {
							box.style.filter = 'blur(1px)';
						});
					},
					{ once: true }
				);

				boxesClone.addEventListener(
					'transitionend',
					function () {
						this.querySelectorAll('.box').forEach((box, index) => {
							box.style.filter = 'blur(0)';

						});
					},
					{ once: true }
				);

				const box = document.createElement('div');
				const img = document.createElement('img');
				box.classList.add('box');
				img.classList.add('reel-img');
				img.src = window.innerWidth >= 1024 ? pool[i].src : pool[i].srcMob;

				box.dataset.doNotLookHere = pool[i].winner;
				box.dataset.id = pool[i].id
				box.appendChild(img);
				box.addEventListener('click', lootboxClick)
				boxesClone.appendChild(box);

				const boxHght = door.clientHeight
				boxHeight = boxHght / 2;
				// boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;

				door.replaceChild(boxesClone, boxes);
				generalBoxes = boxes;

				generalBoxesClone = boxesClone;
				i++
			}
			toggleAnimations(true);
			attemptsCounter.forEach(at => at.innerText = ` ${atCount}`);
		}

		function lootboxClick() {
			atCount -= 1;
			disabled = true;
			attemptsCounter.forEach(at => at.innerText = ` ${atCount}`);

			spinSound.pause();
			disabled = false;

			if (spinCount === 2) {
				toggleAnimations(false);
				winModal(this, items[this.dataset.id].srcWin)
				return
			} else {
				if (this.dataset.doNotLookHere === 'true') {
					toggleAnimations(false);
					winModal(this, items[this.dataset.id].srcWin);
				} else {
					toggleAnimations(false);
					loose(this, items[this.dataset.id].srcLoose)
				}
			}
			spinCount += 1;
		}

		async function spin() {
			toggleAnimations(false)
			moveFinger.forEach(f => f.classList.remove('moove-finger-anim'))

			if (!disabled) {
				if (atCount === 1) {
					init();
				}

				const boxes = document.querySelectorAll('.boxes');
				let index = randomIntFromInterval(10, 20);
				let arrIndex = 0;
				let duration = 10;
				let freezeTime = 5;

				spinSound.src = 'assets/audio/spin.mp3';
				spinSound.play();

				atCount -= 1;
				disabled = true;
				attemptsCounter.forEach(at => at.innerText = ` ${atCount}`);
				poolHeight = (poolHeight / 2) + (boxHeight);

				spinBtn.classList.add('active');

				setTimeout(() => {
					spinBtn.classList.remove('active');
				}, 400);

				for (let i = 0; i < index; i++) {
					//add opacity and scale
					await new Promise((resolve) => setTimeout(resolve, duration * freezeTime));
					boxes[arrIndex].style.opacity = `.5`;
					boxes[arrIndex].style.transform = `scale(1.2)`;

					//cancel opacity and scaling
					await new Promise((resolve) => setTimeout(resolve, (duration - 5) * freezeTime));
					boxes[(arrIndex - 1) === -1
						? 5
						: arrIndex - 1].style.opacity = `1`;
					boxes[(arrIndex - 1) === -1
						? 5
						: arrIndex - 1].style.transform = `scale(1)`;

					arrIndex = (arrIndex + 1) % 6 === 0 ? 0 : arrIndex + 1;
					duration += 1;
				}


				//choose win box
				let winBox = boxes[arrIndex === 0 ? 5 : arrIndex - 1].querySelector('.box');


				if (spinCount === 2) {
					spinSound.pause()
					toggleAnimations(false);
					setTimeout(() => {
						boxes[arrIndex === 0 ? 5 : arrIndex - 1].style.opacity = '1';
					}, 1000);
					winModal(winBox, items[winBox.dataset.id].srcWin)
					return
				} else {
					if (winBox.dataset.doNotLookHere === 'true') {
						spinSound.pause()
						toggleAnimations(false);
						setTimeout(() => {
							boxes[arrIndex === 0 ? 5 : arrIndex - 1].style.opacity = '1';
						}, 1000);
						winModal(winBox, items[winBox.dataset.id].srcWin);
					} else {
						toggleAnimations(false);
						spinSound.pause()
						loose(winBox, items[winBox.dataset.id].srcLoose, boxes)
					}
				}
				spinCount += 1;
				disabled = false;
			}
		}

		function randomIntFromInterval(min, max) { // min and max included 
			return Math.floor(Math.random() * (max - min + 1) + min)
		}

		function winModal(el, src) {
			let img = el.querySelector('img');
			el.classList.add('shakeLootboxOnClick');
			let qm = el.closest('.boxes').closest('.door').querySelector('.question-mark');
			qm.style.background = 'none';
			setTimeout(() => {
				img.src = src;
				el.style.opacity = '1';
			}, 1000);
			setTimeout(() => {
				img.src = src;
				el.style.opacity = '1';
				macAudio.play();
				fireworks.start();
				overlay.classList.add('active');
				wrapper.classList.add('active');
				modal.classList.add('active');
			}, 2000);
		}

		function loose(el, src, boxes) {
			let img = el.querySelector('img');
			el.classList.add('shakeLootboxOnClick');
			let qm = el.closest('.boxes').closest('.door').querySelector('.question-mark');
			qm.style.background = 'none';
			setTimeout(() => {
				if (boxes) {
					boxes.forEach(b => b.style.opacity = '1')
				}
			}, 500);
			setTimeout(() => {
				img.src = src;
			}, 1000);
			setTimeout(() => {
				toggleAnimations(true);
				moveFinger.forEach(f => f.classList.add('moove-finger-anim'))
			}, 3500);
		}

		function toggleAnimations(action) {
			let boxes = document.querySelectorAll('.boxes');
			let questionMarks = document.querySelectorAll('.question-mark')

			if (action) {
				boxes.forEach((box, i) => box.classList.add(`boxes-anim${i + 1}`))
				questionMarks.forEach((qm, i) => qm.classList.add(`question-mark-anim${i + 1}`))
			} else {
				boxes.forEach((box, i) => box.classList.remove(`boxes-anim${i + 1}`))
				questionMarks.forEach((qm, i) => qm.classList.remove(`question-mark-anim${i + 1}`))
			}
		}

		function shuffle([...arr]) {
			let m = arr.length;
			while (m) {
				const i = Math.floor(Math.random() * m--);
				[arr[m], arr[i]] = [arr[i], arr[m]];
			}
			return arr;
		}

		init();
	})();

});

$(document).ready(function () {
	let htmlLang = document.querySelector('#language')

	var $langSwitcher = $('.lang_switcher'),
		$langList = $('.lang_list'),
		$langListItem = $('.lang_list_item'),
		$html = $('html'),
		$preloader = $('.preloader'),
		$currLang = $('.curr_lang');

	$langSwitcher.click(function () {
		$langList.toggleClass('act');
	});

	$langListItem.click(function () {
		$preloader.fadeIn();
		$html.removeClass('hide');
		setTimeout(function () {
			$preloader.fadeOut();
			$html.addClass('hide');
			htmlLang.value = lang;
			htmlLang.click();
		}, 200);
		var lang = $(this).data('lang');
		var langs = $('.lang_list_item').map(function (i, el) {
			return $(el).data('lang');
		}).toArray().join(" ");
		$html.removeClass(langs).addClass(lang);
		localStorage.lang = lang;
		$('.lang_list_item[data-lang="' + lang + '"]')
			.addClass('curr')
			.siblings()
			.removeClass('curr');
		$currLang.html($(this).html());


	});

	$(document).mouseup(function (e) {
		if (!$langSwitcher.is(e.target)
			&& $langSwitcher.has(e.target).length === 0) {
			$langList.removeClass('act');
		}
	});

});
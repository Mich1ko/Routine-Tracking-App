// Basic, non-JSX renderer with debug info so the page always shows something.
console.log('main.js loaded');

try {
	const userData = {
		name: "Michiko",
		age: 16,
		imageUrl: "https://i.pinimg.com/736x/1f/1b/0c/1f1b0c6afd9caecd99219eeacf9c6c6b.jpg",
		imageSize: 100
	};

	const section = document.querySelector('section');
	if (!section) throw new Error('No <section> element found in the page');

	const card = document.createElement('div');
	card.className = 'profile-card';
	card.innerHTML = `
		<img src="${userData.imageUrl}" alt="${userData.name}" class="avatar">
		<div class="info">
			<h1>${userData.name}</h1>
			<p>Age: ${userData.age}</p>
		</div>
	`;

	section.innerHTML = ''; // clear any placeholder
	section.appendChild(card);
} catch (err) {
	console.error(err);
	const section = document.querySelector('section');
	if (section) section.innerHTML = `<p style="color:#a00;text-align:center">Error rendering page: ${err.message}</p>`;
}

// Helpful global handler so errors are visible on the page during debugging
window.addEventListener('error', (e) => {
	const section = document.querySelector('section');
	if (section) section.innerHTML = `<p style="color:#a00;text-align:center">Runtime error: ${e.message}</p>`;
});

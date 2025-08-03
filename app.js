function renderBookItem(book) {
    // Conditionally create the audio link HTML only if an audioLink exists
    const audioLinkHTML = book.audioLink
        ? `<li><strong>Audiobook:</strong> <a href="${book.audioLink}" target="_blank" rel="noopener noreferrer">Listen on LibriVox</a></li>`
        : '';

    return `
        <li class="book-item">
            <h3>${book.title}</h3>
            <ul class="book-details">
                <li><strong>Published:</strong> ${book.published}</li>
                <li><strong>Word Count:</strong> ~${book.wordCount}</li>
                <li><strong>Blurb:</strong> ${book.blurb}</li>
                <li><strong>Text:</strong> <a href="${book.link}" target="_blank" rel="noopener noreferrer">Read on Project Gutenberg</a></li>
                ${audioLinkHTML}
            </ul>
        </li>
    `;
}

function renderSection(category, sectionData) {
    const bookListHTML = sectionData.books.map(renderBookItem).join('');
    return `
        <section class="book-section">
            <h2>${category}</h2>
            <p>${sectionData.description}</p>
            <ul class="book-list">${bookListHTML}</ul>
        </section>
    `;
}
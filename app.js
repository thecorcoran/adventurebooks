/**
 * Renders an individual book item following Tufte-style typographic hierarchy
 * and side-margin metadata.
 */
function renderBookItem(book) {
    const audioLinkHTML = book.audioLink
        ? `<a href="${book.audioLink}" target="_blank" rel="noopener noreferrer">LibriVox Audio &rarr;</a>`
        : '';

    const authorHTML = book.author
        ? `<div class="book-author">by ${book.author}</div>`
        : '';

    return `
        <li class="book-entry">
            <div class="book-main">
                <h3 class="book-title"><em>${book.title}</em></h3>
                ${authorHTML}
                <p class="book-synopsis">${book.blurb}</p>
            </div>
            <aside class="book-sidenote">
                <div class="book-sidenote-item">
                    <span class="sidenote-label">Year</span>
                    <span>${book.published}</span>
                </div>
                <div class="book-sidenote-item">
                    <span class="sidenote-label">Length</span>
                    <span>~${book.wordCount} words</span>
                </div>
                <div class="sidenote-links">
                    <a href="${book.link}" target="_blank" rel="noopener noreferrer">Gutenberg Ebook &rarr;</a>
                    ${audioLinkHTML}
                </div>
            </aside>
        </li>
    `;
}

/**
 * Renders a full category section with an introductory note and list of books.
 */
function renderSection(category, sectionData) {
    const bookListHTML = sectionData.books.map(renderBookItem).join('');
    return `
        <section class="book-section">
            <h2>${category}</h2>
            <p class="section-summary">${sectionData.description}</p>
            <ul class="book-list">${bookListHTML}</ul>
        </section>
    `;
}
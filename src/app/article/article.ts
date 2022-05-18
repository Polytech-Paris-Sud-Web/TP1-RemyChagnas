/**
 * Describe article object
 */
class Article {

    id: number;
    title: string;
    content: string;
    author: string;

    constructor(title: string, content: string, author: string) {
        this.id = 0;
        this.title = title;
        this.content = content;
        this.author = author;
    }
}

export default Article;
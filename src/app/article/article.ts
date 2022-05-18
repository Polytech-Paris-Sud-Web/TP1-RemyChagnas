/**
 * Describe article object
 */
class Article {

    id: number;
    title: string;
    content: string;
    author: string;
    creationDate: Date;

    constructor(title: string, content: string, author: string) {
        this.id = 0;
        this.title = title;
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
    }
}

export default Article;
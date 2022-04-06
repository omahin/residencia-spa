export class MovieModel {
    readonly title: string
    readonly coverURL: string

    constructor(title: string, coverURL: string) {
        this.title = title;
        this.coverURL = coverURL;
    }
}
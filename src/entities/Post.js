class Post {
    constructor(post) {
        this.id = post.id;
        this.dateCreated = new Date(post.dateCreated);
        this.userId = post.userId;
        this.userDisplayName = post.userDisplayName;
        this.type = post.type;
        this.commentsNum = post.commentsNum;
    }
    getDatum() {
        const day = this.dateCreated.getDate();
        const month = this.dateCreated.getMonth();
        const year = this.dateCreated.getFullYear();

        return `day / month / year `
    }


}


class Video extends Post {
    constructor(post) {
        super(post)
        this.imageUrl = post.imageUrl;
    }
}
class Text extends Post {
    constructor(post) {
        super(post)
        this.text = post.text;
    }
}
class Image extends Post {
    constructor(post) {
        super(post)
        this.videoUrl = post.videoUrl;
    }
}
export { Video, Text, Image };
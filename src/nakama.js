class Nakama {
	constructor() {
		this.api = "https://nakama.social/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async sendLoginLink(email) {
		const response = await fetch(
			`${this.api}/send_magic_link`, {
				method: "POST",
				body: JSON.stringify({
					email: email,
					redirectURI: "https://nakama.social/access-callback"
				}),
				headers: this.headers
			})
		return response.json()
	}

	async loginByToken(token) {
		this.token = token
		this.headers["Authorization"] = `Bearer ${this.token}`
	}

	async getPosts(last = 10) {
		const response = await fetch(
			`${this.api}/posts?last=${last}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async createPost(content, spoilerOf = null, nsfw = false) {
		const response = await fetch(
			`${this.api}/timeline`, {
				method: "POST",
				body: JSON.stringify({
					content: content,
					spoilerOf: spoilerOf,
					nsfw: nsfw
				}),
				headers: this.headers
			})
		return response.json()
	}

	async editPost(postId, content) {
		const response = await fetch(
			`${this.api}/posts/${postId}`, {
				method: "PATCH",
				body: JSON.stringify({
					content: content
				}),
				headers: this.headers
			})
		return response.json()
	}

	async deletePost(postId) {
		const response = await fetch(
			`${this.api}/posts/${postId}`, {
				method: "DELETE",
				headers: this.headers
			})
		return response.status
	}

	async reactToPost(postId, type, reaction) {
		const response = await fetch(
			`${this.api}/posts/${postId}`, {
				method: "POST",
				body: JSON.stringify({
					type: type,
					reaction: reaction
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getPostComments(postId, last = 10) {
		const response = await fetch(
			`${this.api}/posts/${postId}/comments?last=${last}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async commentPost(postId, content) {
		const response = await fetch(
			`${this.api}/posts/${postId}/comments`, {
				method: "POST",
				body: JSON.stringify({
					content: content
				}),
				headers: this.headers
			})
		return response.json()
	}

	async editComment(commentId, content) {
		const response = await fetch(
			`${this.api}/comments/${commentId}`, {
				method: "PATCH",
				body: JSON.stringify({
					content: content
				}),
				headers: this.headers
			})
		return response.json()
	}

	async deleteComment(commentId) {
		const response = await fetch(
			`${this.api}/comments/${commentId}`, {
				method: "DELETE",
				headers: this.headers
			})
		return response.status
	}

	async getUser(username) {
		const response = await fetch(
			`${this.api}/users/${username}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getUserPosts(username, last = 10) {
		const response = await fetch(
			`${this.api}/users/${username}/posts?last=${last}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getNotifications(last = 10) {
		const response = await fetch(
			`${this.api}/notifications?last=${last}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async followUser(username) {
		const response = await fetch(
			`${this.api}/users/${username}/toggle_follow`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async getUserFollowers(username, first = 10) {
		const response = await fetch(
			`${this.api}/users/${username}/followers?after=&first=${first}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getUserFollows(username, first = 10) {
		const response = await fetch(
			`${this.api}/users/${username}/followees?after=&first=${first}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Nakama}

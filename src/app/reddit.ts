export interface Reddit {
    data: {
		children: [
			{
				data: {
					title: String,
					thumbnail: String,
					permalink: String
				}
			}
		]
	}
}

let UserData = {
    fullName: 'John Doe',
    email: 'john.doe@mail.com',
    messages: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Vestibulum ut eros purus.',
        'Sed metus ligula, bibendum eu tellus sed, feugiat accumsan felis.',
        'Ut eu lorem libero.',
        'Morbi egestas, nisi ac tempus dictum, eros velit sagittis ex, in placerat orci erat et elit.',
        'Praesent ligula augue, blandit at ultricies eu, ullamcorper a sem.',
        'Quisque fringilla, nulla vitae tempor fermentum, lectus felis volutpat sapien, vel tincidunt ligula enim vitae metus.',
        'Nulla sapien leo, sodales nec metus in, sagittis dignissim dolor.',
        'Quisque ornare tempor velit, et ornare orci ornare nec.',
        'Aliquam erat volutpat.'
    ]
}

export default class DataRepository {
    static getUser(id) {
        return UserData
    }
}

class Data {
  constructor(
    readonly id: string,
    readonly author: string,
    readonly image: string,
    readonly title: string,
    readonly description: string,
    readonly text: string
  ) {}
}

class FakeData {
  static readonly data: Data[] = [
    new Data(
      '1',
      'Angular',
      'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/01/the-last-of-us-serie.jpg',
      'The Last of Us - Part 1',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
    ),
    new Data(
      '2',
      'Angular',
      'https://www.omelete.com.br/webstories/the-last-of-us-game-vs-live-action/assets/2.jpeg',
      'The Last of Us - Part 2',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
    ),
    new Data(
      '3',
      'Angular',
      'https://www.einerd.com.br/wp-content/uploads/2023/01/ellie-e-joel-the-last-of-us-890x466.jpg',
      'The Last of Us - Part 3',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
    ),
    new Data(
      '4',
      'Angular',
      'https://uploads.metropoles.com/wp-content/uploads/2023/01/13152103/The-Last-of-Us-2-600x400.jpg',
      'The Last of Us - Part 4',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
    ),
    new Data(
      '5',
      'Angular',
      'https://s2.glbimg.com/KCbUDlricJEr_5l77BQm3GcVsM0=/0x0:3840x2160/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/Y/N0kp9pTB2QI7zYMPjFpQ/the-last-of-us-2-ellie-4.jpg',
      'The Last of Us - Part 5',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nunc eu feugiat lacinia, nisl turpis tempor mi, id euismod neque urna id risus. Maecenas non neque metus. Nullam viverra, diam vitae porttitor pulvinar, diam metus vehicula quam, in porttitor elit eros sit amet nisl.',
    )
  ]

  static getById(id: string): Data {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id)
        return this.data[i];
    }

    return this.data[0];
  }
}

export {Data, FakeData}

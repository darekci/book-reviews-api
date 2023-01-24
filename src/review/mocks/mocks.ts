import { ReviewEntity } from '../entities/review.entity';

const MOCK_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Sollicitudin tempor id eu nisl nunc mi. Aliquet sagittis id consectetur purus. Ullamcorper sit amet risus nullam. Ut ornare lectus sit amet est placerat in egestas erat. Blandit turpis cursus in hac habitasse platea dictumst. Diam sollicitudin tempor id eu nisl. Dignissim cras tincidunt lobortis feugiat vivamus. In ornare quam viverra orci sagittis. Amet facilisis magna etiam tempor. Scelerisque viverra mauris in aliquam. Ut lectus arcu bibendum at. Viverra adipiscing at in tellus. Elementum nisi quis eleifend quam adipiscing. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.

Bibendum ut tristique et egestas quis ipsum suspendisse. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Ac turpis egestas maecenas pharetra convallis. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Sit amet consectetur adipiscing elit pellentesque. Varius morbi enim nunc faucibus a pellentesque sit amet. Fringilla ut morbi tincidunt augue. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Aliquet porttitor lacus luctus accumsan tortor posuere. Arcu dui vivamus arcu felis bibendum ut tristique et. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Purus non enim praesent elementum. Dapibus ultrices in iaculis nunc. Urna id volutpat lacus laoreet non. Elementum tempus egestas sed sed risus. Tristique senectus et netus et malesuada fames ac turpis. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Ut enim blandit volutpat maecenas volutpat.

Tempus urna et pharetra pharetra. Et netus et malesuada fames ac turpis egestas. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor. Integer eget aliquet nibh praesent tristique magna sit. Arcu dui vivamus arcu felis bibendum ut. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Aliquam eleifend mi in nulla posuere. Lorem sed risus ultricies tristique nulla aliquet enim. Lacus suspendisse faucibus interdum posuere lorem. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.

Ac auctor augue mauris augue neque gravida in fermentum. Cursus risus at ultrices mi tempus. Sem nulla pharetra diam sit amet nisl suscipit. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Pretium quam vulputate dignissim suspendisse in est ante in. Dui sapien eget mi proin sed libero. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. At tellus at urna condimentum. Eget magna fermentum iaculis eu non diam phasellus. Volutpat sed cras ornare arcu dui vivamus arcu felis. Velit dignissim sodales ut eu sem.

Tempus quam pellentesque nec nam. Tincidunt augue interdum velit euismod in pellentesque massa. Sit amet nisl purus in. Amet consectetur adipiscing elit ut aliquam purus sit. Elementum eu facilisis sed odio morbi quis. Felis donec et odio pellentesque diam. Curabitur vitae nunc sed velit dignissim. Vitae congue eu consequat ac. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Sapien faucibus et molestie ac feugiat sed lectus. Etiam tempor orci eu lobortis elementum nibh tellus. Morbi tristique senectus et netus.`;

export const MOCKS_REVIEWS: ReviewEntity[] = [
  {
    id: '5581dde0-6c64-465f-880d-b3d77cff9380',
    author: 'James Bond',
    coverUrl:
      'https://media.istockphoto.com/id/949118068/pl/zdj%C4%99cie/ksi%C4%85%C5%BCki.jpg?s=1024x1024&w=is&k=20&c=0IxAs8x4mIRkTf8R38_YNdATzAuhQ8HoAmfvHarzkC4=',
    description: MOCK_DESCRIPTION,
    stars: 4,
    title: 'Amazing Book',
  },
  {
    id: 'dee12c28-03dc-4df5-98cf-88f9feb249fe',
    author: 'Awesome Reviewer',
    coverUrl:
      'https://media.istockphoto.com/id/1216984103/pl/zdj%C4%99cie/wiele-stos%C3%B3w-ksi%C4%85%C5%BCek-edukacyjnych-w-domu-przygotowuj%C4%85cych-si%C4%99-do-egzamin%C3%B3w-na-bia%C5%82ym-tle.jpg?s=1024x1024&w=is&k=20&c=fr8eCrbPYl2Mp4oGZjlMnN8DiFWdhf3wO3T19cIpFlY=',
    description: MOCK_DESCRIPTION,
    stars: 2,
    title: 'So Called Book',
  },
  {
    id: 'f96f28f2-8bb0-445f-8148-09ee0f4a6e3a',
    author: 'James Bond',
    coverUrl:
      'https://media.istockphoto.com/id/1279460648/pl/zdj%C4%99cie/koncepcja-otwartej-magicznej-ksi%C4%85%C5%BCki-otwartych-stron-z-wod%C4%85-i-ziemi%C4%85-oraz-ma%C5%82ym-dzieckiem.jpg?s=1024x1024&w=is&k=20&c=tOE-xiXGnhQi3K5pisyJg2tD0v_pEqj0n_aqygr53XQ=',
    description: MOCK_DESCRIPTION,
    stars: 5,
    title: 'Great book',
  },
];

function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array';
    }
    let mega = [0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['Kutub', 'Lion', 'Sabbir', 'Shamol'];
const myBigBuddy = megaFriend(1234);
// console.log(myBigBuddy);

// indexOf
if (friends.indexOf('Lion') != -1) {
    // console.log('Lion exists');
}

// includes
if (friends.includes('Lion')) {
    console.log('Lion exists');
}

// concat
const first = [1, 3, 5];
const second = [2, 4, 6, 8];
const combined = first.concat(second);
console.log(combined);

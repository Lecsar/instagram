import React from 'react';
import ProfileLink from './profile-link';

const textDecorate = (text, onResetOpenPostId) => {
    let elementNumber = 0;
    const arrOfDecorateWords = [''];

    text
        .split(' ')
        .map((word, index) => {
            let wordWithoutFirstSign;

            if (word.indexOf('@') === 0) {
                wordWithoutFirstSign = word
                    .split('')
                    .slice(1)
                    .join('');
                return (
                    <ProfileLink
                        key={index}
                        value={wordWithoutFirstSign.slice(
                            0,
                            wordWithoutFirstSign.length - 2
                        )}
                        handler={onResetOpenPostId}
                        styles={{ textDecoration: 'underline', fontWeight: '500' }}
                    />
                );
            } else {
                return word;
            }
        })
        .forEach(element => {
            if (typeof element === 'string') {
                arrOfDecorateWords[elementNumber] += ' ' + element;
            } else {
                elementNumber++;
                arrOfDecorateWords[elementNumber] = element;
                elementNumber++;
                arrOfDecorateWords[elementNumber] = '';
            }
        });

    return arrOfDecorateWords;
};

export default textDecorate;

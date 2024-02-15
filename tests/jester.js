// Import your functions from your script
const { go } = require('./yourScript.js');

// Mock the document object
global.document = {
    getElementById: jest.fn().mockImplementation((selector) => {
        switch (selector) {
            case 'mode-dropdown':
                return {
                    options: [{ value: 'major' }, { value: 'minor' }],
                    selectedIndex: 0,
                };
            case 'chord':
            case 'shape':
                return {
                    textContent: '',
                };
            default:
                return null;
        }
    }),
};

describe('go function', () => {
    it('should set the textContent of chord and shape', () => {
        go();
        expect(document.getElementById('chord').textContent).toBeTruthy();
        expect(document.getElementById('shape').textContent).toBeTruthy();
    });
});

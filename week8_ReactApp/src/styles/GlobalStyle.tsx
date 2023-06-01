import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	
	*,
	*::before,
	*::after {
		box-sizing: inherit; // box-sizing: border-box를 위해, 다만 바꾸고 싶을 수 있으니 적용할 수 있도록
	}
	
	html {
		font-size: 62.5%; // font-size: 10px로 만들어서 rem 쓰기 쉽도록
	}
	
	body {
		font-size: 1.6rem; // 16px
	}
	
	:lang(ko) {
		h1, h2, h3 {
			word-break: keep-all; // 자연스러운 줄바꿈
		}
	}
`;

export default GlobalStyle;
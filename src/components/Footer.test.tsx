import { render } from '@/utils/test-utils';
import Footer from './Footer';

describe('Footer', () => {
  it('should display the correct text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText('Copyright');
    expect(footerText).toBeInTheDocument();
  });
});

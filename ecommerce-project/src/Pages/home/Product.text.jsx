import { it, expect, describe, vi} from 'vitest';
import { render , screen } from '@testing-library/react';
import { Product } from './Product';


describe('Product component', () => {
      it('displays the product details correctly', () => {
        const loadCart = vi.fn();
    render(<Product product={product} loadCart={loadCart} />);
    screen.getByText('Black and Gray')
})
});
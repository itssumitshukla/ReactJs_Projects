import { it, expect, describe} from 'vitest';
import { Product } from './Product';


describe('Product component', () => {
      it('displays the product details correctly', () => {
    render(<Product product={product} loadCart={loadCart} />);
})
});
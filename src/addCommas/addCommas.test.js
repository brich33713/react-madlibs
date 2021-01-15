import { fireEvent, render, getByText, getByTestId, getByLabelText } from '@testing-library/react';
import AddCommas from './addCommas'

it('renders without crashing',()=>{
    render(<AddCommas />)
})

it("matches snapshot",()=>{
    const {asFragment} = render(<AddCommas/>)
    expect(asFragment()).toMatchSnapshot()
})
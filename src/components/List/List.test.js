import { render, screen } from '@testing-library/react';
import List from './List';
import ListRow from '../ListRow/ListRow';
import ListItemText from '../ListItemText/ListItemText';

describe('List', () => {
  it('should display header list correctly', () => {
    render(<List headerItems={['Artist', 'Albums']}></List>);
    expect(screen.getByText(/Artist/)).toBeInTheDocument();
  });

  it('should display list correctly', () => {
    const { rerender } = render(
      <List headerItems={['Artist', 'Albums']} isEmpty></List>
    );

    expect(screen.getByText(/No data/)).toBeInTheDocument();

    rerender(
      <List headerItems={['Artist', 'Albums']}>
        <ListRow>
          <ListItemText>AC/DC</ListItemText>
          <ListItemText>Back in Black</ListItemText>
        </ListRow>
      </List>
    );

    expect(screen.getByText(/AC/)).toBeInTheDocument();
    expect(screen.getByText(/Back/)).toBeInTheDocument();
  });
});

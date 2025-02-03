import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { useGames } from '../game/games.hooks';
import { generateMockGame } from './mock-data';
import { HomePage } from '../pages';

test('HomePage', () => {
  const { mockImplementation } = useGames();
  it('renders a list of games', async () => {
    const games = [
      generateMockGame(),
      generateMockGame(),
    ];

    mockImplementation(games);
    const { getByText } = render(<HomePage />)
    expect(getByText(games[0].title)).toBeTruthy();
    expect(getByText(games[1].title)).toBeTruthy();
  });
});
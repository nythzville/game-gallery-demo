import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { useGames } from '../game/games.hooks';
import { generateMockGame } from './mock-data';
import { GameDetailsPage } from '../pages';
import { IGameDetails } from '../game/games.constants';

test('Game Details Page', () => {
  const { mockImplementation } = useGames();
  it('renders game details', async () => {
    const game = generateMockGame() as IGameDetails;

    mockImplementation([game], game);
    const { getByText } = render(<GameDetailsPage />)
    expect(getByText(game.title)).toBeTruthy();
  });
});
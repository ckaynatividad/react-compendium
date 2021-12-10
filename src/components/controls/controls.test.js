import { render, screen } from '@testing-library/react';
import Controls from './controls';

test('search query should be working properly', () => {
  const container = render( 
    <Controls query="venusaur" setQuery="venusaur" setLoading="false" types={['grass', 'psychic']} selectedType="grass" setSelectedType="grass" order="asc" setOrder="asc" />

  );
  expect(container).toMatchSnapshot();
});
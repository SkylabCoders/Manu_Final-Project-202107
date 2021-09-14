import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import CastMovieDetail from './index';

describe('Given a CastMovieDetail component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <CastMovieDetail />
      );
    });
    test('Then should be a button by Id "button-delete", id', () => {
      expect(screen.getByTestId('button-delete')).toBeInTheDocument();
    });
  });
});

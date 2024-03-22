type FontWeight = '300' | '400' | '700';
type Heading = 'H1' | 'H2' | 'H3';
type Paragraph = 'P1' | 'P2' | 'P3';

type Styles = {
  Color: {
    BackGround: string;
    ForeGround: string;
    Primary: string;
    Secondary: string;
    Green: string;
    Red: string;
  },
  FontSize: {
    Small: number;
    Medium: number;
    Large: number;
  },
  FontWeight: {
    Light: FontWeight;
    Normal: FontWeight;
    Bold: FontWeight;
  },
  Heading: {
    [key in Heading]: {
      FontSize: number;
      FontWeight: FontWeight;
    }
  },
  Paragraph: {
    [key in Paragraph]: {
      FontSize: number;
      FontWeight: FontWeight;
    }
  },
  Spacing: {
    Small: number;
    Medium: number;
    Large: number;
  },
  Border: {
    Radius: {
      Small: number;
      Medium: number;
      Large: number;
    },
    Width: {
      Small: number;
      Medium: number;
      Large: number;
    }
    Shadow: {
      Small: number;
      Medium: number;
      Large: number;
    },
    ShadowColor: string;
  },
}

export const GlobalStyles: Styles = {
  Color: {
    BackGround: '#fff',
    ForeGround: '#000',
    Primary: '#B4B4B8',
    Secondary: '#C7C8CC',
    Green: '#008000',
    Red: '#FF204E',
  },
  FontSize: {
    Small: 12,
    Medium: 16,
    Large: 20,
  },
  FontWeight: {
    Light: '300',
    Normal: '400',
    Bold: '700',
  },
  Heading: {
    H1: {
      FontSize: 24,
      FontWeight: '700',
    },
    H2: {
      FontSize: 20,
      FontWeight: '700',
    },
    H3: {
      FontSize: 16,
      FontWeight: '700',
    }
  },
  Paragraph: {
    P1: {
      FontSize: 16,
      FontWeight: '400',
    },
    P2: {
      FontSize: 14,
      FontWeight: '400',
    },
    P3: {
      FontSize: 12,
      FontWeight: '400',
    }
  },
  Spacing: {
    Small: 4,
    Medium: 8,
    Large: 16,
  },
  Border: {
    Radius: {
      Small: 4,
      Medium: 8,
      Large: 16,
    },
    Width: {
      Small: 1,
      Medium: 2,
      Large: 4,
    },
    Shadow: {
      Small: 4,
      Medium: 8,
      Large: 16,
    },
    ShadowColor: 'rgba(0,0,0,0.2)',
  },
}

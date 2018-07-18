export const groupList = [
  {
    links: [
      {
        isExpanded: true,
        links: [
          {
            key: 'key1',
            name: 'Project 1',
            url: '',
          },
          {
            key: 'key2',
            name: 'Project 2',
            url: '',
          }
        ],
        name: 'My Work',
        url: '',
      },
      {
        isExpanded: true,
        links: [
          {
            key: 'key1',
            name: 'Group 1',
            url: '',
          },
          {
            key: 'key2',
            name: 'Group 2',
            url: '',
          }
        ],
        name: 'My Group',
        url: '',
      },
      { name: 'All Work', url: '', key: 'key3'},
    ]
  }
];

export const navStyles = (props: INavStyleProps) => {
  const color = '#ddd';
  return {
    root: {
    },
    chevronButton: {
      borderBottom: 'none',
      color,
    },
    group: {
      color,
    },
    link: [
      color,
      props.isSelected && {
        backgroundColor: 'transparent',
        selectors: {
          '.ms-Nav-compositeLink:hover &': {
            backgroundColor: 'transparent',
          },
        },
      },
      {
        selectors: {
          '.ms-Nav-compositeLink:hover &': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        },
      },
    ],
    linkText: {
      color,
    },
    compositeLink: [
      color,
      {
        backgroundColor: 'transparent',
      },
      props.isSelected && {
        backgroundColor: 'transparent',
        selectors: {
          '&:visited': {
            color: 'inherit',
          },
          ':hover': {
            backgroundColor: 'transparent',
          },
          '$compositeLink:hover &': {
            backgroundColor: 'transparent',
          },
        },
      },
      {
        selectors: {
          ':hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    ],
  } as Partial<INavStyles>;
}
}

import {
  INavStyleProps,
  INavStyles,
} from 'office-ui-fabric-react';

export const groupList = (onClickHandler: any) =>  [
  {
    links: [
      {
        isExpanded: true,
        links: [
          {
            key: 'key1',
            name: 'Project 1',
            onClick: () => onClickHandler('Project 1'),
            url: '',
          },
          {
            key: 'key2',
            name: 'Project 2',
            onClick: () => onClickHandler('Project 2'),
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
            key: 'key3',
            name: 'Group 1',
            onClick: () => onClickHandler('Group 1'),
            url: '',
          },
          {
            key: 'key4',
            name: 'Group 2',
            onClick: () => onClickHandler('Group 2'),
            url: '',
          }
        ],
        name: 'My Group',
        url: '',
      },
      { name: 'All Work', url: '', key: 'key5',  onClick: () => onClickHandler('All')},
    ]
  }
];

export const navStyles = (props: INavStyleProps) => {
  const color = '#ddd';
  return {
    chevronButton: {
      borderBottom: 'none',
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
          '$compositeLink:hover &': {
            backgroundColor: 'transparent',
          },
          '&:visited': {
            color: 'inherit',
          },
          ':hover': {
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
    root: {
    },
  } as Partial<INavStyles>;
};

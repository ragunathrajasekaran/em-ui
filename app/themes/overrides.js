const overrides = props => {
  // eslint-disable-next-line no-unused-vars
  const { primaryLight, primaryDark, secondaryLight, secondaryDark } = props;
  // class="MuiList-root-60 MuiList-padding-61"
  return {
    MuiDivider: {
      root: {
        backgroundColor: secondaryDark,
        height: 1,
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    // .MuiDrawer-paperAnchorDockedLeft-13
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: {
          borderRightWidth: 0,
        },
      },
      paper: {
        zIndex: 0,
      },
    },
    MuiListItem: {
      // button: {
      //   '&:hover': {
      //     backgroundColor: primaryLight,
      //   },
      // },
      // .MuiListItem-root-68.MuiListItem-selected-79
      root: {
        '&$selected': {
          backgroundColor: secondaryDark,
        },
      },
    },
  };
};

export default overrides;

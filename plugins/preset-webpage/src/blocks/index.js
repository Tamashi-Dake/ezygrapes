export default (editor, opts) => {
  const bm = editor.BlockManager;
  const toAdd = name => opts.blocks.indexOf(name) >= 0;

  const categoryName = editor.I18n.t(opts.category) || opts.category;

  toAdd('link-block') && bm.add('link-block', {
    category: categoryName,
    label: `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
      </svg>
      <div class="gjs-block-label">${editor.I18n.t('link_block')}</div>`,
    content: {
      type:'link',
      editable: false,
      droppable: true,
      style:{
        display: 'inline-block',
        padding: '5px',
        'min-height': '50px',
        'min-width': '50px'
      }
    },
  });

  toAdd('quote') && bm.add('quote', {
    label: `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"></path>
      </svg>
      <div class="gjs-block-label">${editor.I18n.t('quote')}</div>`,
    category: categoryName,
    content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`
  });

  toAdd('text-basic') && bm.add('text-basic', {
    category: categoryName,
    label: `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z"></path>
      </svg>
      <div class="gjs-block-label">${editor.I18n.t('text_section')}</div>`,
    attributes: { class: 'gjs-fonts gjs-f-h1p' },
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`
  });
}

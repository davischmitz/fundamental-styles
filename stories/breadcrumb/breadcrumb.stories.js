export default {
    title: 'Components/Breadcrumb',
    parameters: {
        description: `
The breadcrumb component is a type of navigation that indicates the position of a page within the application’s page hierarchy. Users can navigate backward by selecting the previous pages in the navigation path.

##Usage
**Use breadcrumb if:**

- You want to show secondary navigation on the object page
- You want to show navigation in a table
- You want to show navigation in charts
- Use a breadcrumb only when the drilldown scenario leads to related object pages: parent object page / child object page 1 / child object page 2 / child object page 3.

**Do not use breadcrumb if:**

- Your hierarchy contains only one level.

**Do not include these elements in your breadcrumb path:**

- Other floorplans, such as overview pages and list reports
- Cross-application navigation to other object pages
- Independent object pages, such as fact sheets
`,
        tags: ['f3', 'a11y', 'theme'],
        components: ['popover', 'list', 'breadcrumb', 'icon']
    }
};

export const standard = () => `<nav aria-label="products breadcrumbs">
    <ul class="fd-breadcrumb">
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Products</a></li>
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Suppliers</a></li>
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Titanium</a></li>
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Ultra Portable</a></li>
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">12 inch</a></li>
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Super portable deluxe</a></li>
        <li aria-current="page" class="fd-breadcrumb__item">Laptop</li>
    </ul>
</nav>
`;

standard.parameters = {
    docs: {
        storyDescription: 'The standard breadcrumb component displays several pages in text format separated by dividers, indicating a navigation path. Each page can be specifically selected to navigate to its corresponding page. It can be displayed by using the `fd-breadcrumb` class.'
    }
};

export const overflow = () => `
<nav aria-label="overflowing product breadcrumbs">
    <ul class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <div
                        aria-controls="breadcrumb1"
                        aria-expanded="true"
                        aria-haspopup="true"
                        aria-label="Show collapsed breadcrumbs" 
                        class="fd-breadcrumb__link"
                        onclick="onPopoverClick('breadcrumb1');"
                        onkeypress="isSpaceOrEnter(event, onPopoverClick('breadcrumb1'));"
                        role="button"
                        tabindex="0">
                            ...
                        <i role="presentation" class="fd-breadcrumb__dropdown-icon sap-icon sap-icon--slim-arrow-down"></i>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="breadcrumb1">
                    <div class="fd-popover__wrapper">
                        <ul class="fd-list fd-list--navigation" role="menu">
                            <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link" href="#">
                                    <span class="fd-list__title">Products</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link" href="#">
                                    <span class="fd-list__title">Suppliers</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link" href="#">
                                    <span class="fd-list__title">Titanium</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Ultra Portable</a></li>
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">12 inch</a></li>
        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Super portable deluxe</a></li>
        <li aria-current="page" class="fd-breadcrumb__item">Laptop</li>
    </ul>
</nav>
<div style="height: 150px"></div>
`;

overflow.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'The overflow breadcrumb component displays a dropdown menu, followed by several pages in the navigation path. <br>Like the standard breadcrumb, each page can be selected to navigate to its corresponding page. This type is responsive and will collapse into a dropdown menu if there is insufficient horizontal space on the screen. <br>To display the overflow breadcrumb, include the `fd-popover` component in the first breadcrumb item within the element.'
    }
};

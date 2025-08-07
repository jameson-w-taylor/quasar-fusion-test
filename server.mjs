import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const mockApiPort = process.env.MOCK_API_PORT || 3000;

app.use(express.static('dist'));

const mockSession = {
  timeoutEnabled: true,
  sessionLength: 3600,
  sessionRemain: 3600,
  warnIn: 3480,
  lastAccess: 1753800876,
  user: {
    id: 600,
    firstName: 'Graeme',
    surname: 'Dewe',
    username: 'GraemeD',
    email: 'graeme.dewe@eagleeye.com',
    roleName: 'Service Admin',
    unit: {
      id: 1,
      unitName: 'Eagle Eye Solutions',
      unitSafeName: 'eagleeye',
    },
  },
  isProxy: false,
  brand: 'eagleeye-2024',
  locale: 'en-gb',
  availableLocales: {
    'en-gb': 'English (UK)',
    fr: 'French',
    de: 'German',
    pt: 'Portuguese',
    es: 'Spanish',
    vi: 'Vietnamese',
  },
  services: {
    pendo: {
      enabled: false,
      apiKey: '',
    },
  },
  features: {
    switch: true,
  },
  unit: {
    id: 1,
    unitName: 'Eagle Eye Solutions',
    unitSafeName: 'eagleeye',
  },
  navigation: {
    navigation: [
      {
        label: 'Dashboard',
        icon: 'line-chart',
        route: '/dashboard',
        id: 'menu-dashboard-link',
      },
      {
        label: 'Campaigns',
        icon: 'bullhorn',
        route: '/campaigns',
        id: 'menu-campaign-link',
        pages: [
          {
            label: 'Search',
            icon: 'search',
            route: '/campaigns',
            id: 'menu-searchcampaign-link',
          },
          {
            label: 'Create new',
            icon: 'plus',
            route: '/campaigns/create',
            id: 'menu-createcampaign-link',
          },
          {
            label: 'Manage Types',
            icon: 'tag',
            route: '/campaigns/types',
            id: 'menu-managetypes-link',
          },
          {
            label: 'label.manage-types-new',
            icon: 'tag',
            route: '/ui/#/campaign-types',
            id: 'menu-manage-campaign-types-new-link',
          },
          {
            label: 'General Restrictions',
            icon: 'ban',
            route: '/campaigns/general-restrictions',
            id: 'menu-campaignrestrictions-link',
          },
          {
            label: 'Approvals',
            icon: 'thumbs-up',
            route: '/campaigns/approvals',
            id: 'menu-campaignapprovals-link',
          },
          {
            label: 'GS1 Supplier Numbers',
            icon: 'list-ol',
            route: '/campaigns/supplier-numbers',
            id: 'menu-campaigngs1numbers-link',
          },
          {
            label: 'Token Blacklist',
            icon: 'barcode',
            route: '/campaigns/token-blacklist',
            id: 'menu-campaignblacklist-link',
          },
          {
            label: 'Offers',
            icon: 'newspaper',
            route: '/offers',
            id: 'menu-campaignoffers-link',
          },
          {
            label: 'History',
            icon: 'history',
            route: '/campaigns/history',
            id: 'menu-campaignhistory-link',
          },
        ],
      },
      {
        label: 'Schemes',
        icon: 'heart',
        route: '/schemes',
        id: 'menu-scheme-link',
        pages: [
          {
            label: 'Search',
            icon: 'search',
            route: '/schemes',
            id: 'menu-schemesearch-link',
          },
          {
            label: 'Create new',
            icon: 'plus',
            route: '/schemes/create',
            id: 'menu-schemecreate-link',
          },
          {
            label: 'Manage Reward Banks',
            icon: 'archive',
            route: '/reward-bank',
            id: 'menu-managerewardbank-link',
            pages: [
              {
                label: 'Points Scheme',
                icon: 'star',
                route: '/reward-bank/points-loyalty',
                id: 'menu-ee-menu-item-manage-reward-bank-points-loyalty-link',
              },
            ],
          },
          {
            label: 'Loyalty Tiers',
            icon: 'layer-group',
            route: '/loyalty-tiers',
            id: 'menu-loyaltytiers-link',
          },
        ],
      },
      {
        label: 'triggers',
        icon: 'hand-pointer',
        route: '/',
        id: 'menu-triggers-link',
        pages: [
          {
            label: 'Search',
            icon: 'search',
            route: '/ui/#/behavioural-actions',
            id: 'menu-behavioral-actions-search-link',
          },
          {
            label: 'label.create-behavioural-action',
            icon: 'folder-plus',
            route: '/ui/#/behavioural-actions/create',
            id: 'menu-behavioral-actions-create-link',
          },
        ],
      },
      {
        label: 'Programmes',
        icon: 'book',
        route: '/programmes',
        id: 'menu-programmes-link',
        pages: [
          {
            label: 'Search',
            icon: 'search',
            route: '/programmes',
            id: 'menu-programmesearch-link',
          },
          {
            label: 'Create new',
            icon: 'plus',
            route: '/programmes/create',
            id: 'menu-programmecreate-link',
          },
        ],
      },
      {
        label: 'Plans',
        icon: 'refresh',
        route: '/plans',
        id: 'menu-plans-link',
        pages: [
          {
            label: 'Search',
            icon: 'search',
            route: '/plans',
            id: 'menu-planssearch-link',
          },
          {
            label: 'Create new',
            icon: 'plus',
            route: '/plans?create=true',
            id: 'menu-planscreate-link',
          },
        ],
      },
      {
        label: 'Tools',
        icon: 'wrench',
        route: '#',
        id: 'menu-tools-link',
        pages: [
          {
            label: 'Global Product Restrictions',
            icon: 'ban',
            route: '/global-product-restrictions',
            id: 'menu-tool-restrictions-link',
          },
          {
            label: 'Campaign Bulk Orders',
            icon: 'cubes',
            route: '/bulk-orders/campaigns',
            id: 'menu-toolbulkorderscampaigns-link',
          },
          {
            label: 'Programme Bulk Orders',
            icon: 'cubes',
            route: '/bulk-orders/programmes',
            id: 'menu-toolbulkordersprogrammes-link',
          },
          {
            label: 'Forms',
            icon: 'edit',
            route: '/forms',
            id: 'menu-toolforms-link',
          },
          {
            label: 'Data Access Request',
            icon: 'download',
            route: '/gdpr',
            id: 'menu-tool-subject-access-link',
          },
          {
            label: 'Consumer Deletion Request',
            icon: 'download',
            route: '/gdpr/deletion',
            id: 'menu-tool-subject-delete-link',
          },
          {
            label: 'Templates',
            icon: 'envelope',
            route: '/templates',
            id: 'menu-tooltemplates-link',
          },
          {
            label: 'Token Formats',
            icon: 'circle',
            route: '/token-formats',
            id: 'menu-tooltokenformat-link',
          },
          {
            label: 'Bulk Operations',
            icon: 'cubes',
            route: '/bulk-operations',
            id: 'menu-tools-bulk-operations-link',
          },
          {
            label: 'Clear Bulk Import Cache',
            icon: 'paint-brush',
            route: '/clear-bulk-import-cache',
            id: 'menu-clearbulkloadcache-link',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'people-group',
        route: '/users',
        id: 'menu-users-link',
        pages: [
          {
            label: 'Search',
            icon: 'search',
            route: '/users',
            id: 'menu-usersearch-link',
          },
          {
            label: 'Create User',
            icon: 'plus',
            route: '/users?create=true',
            id: 'menu-usercreate-link',
          },
          {
            label: 'Manage Roles',
            icon: 'ticket',
            route: '/roles',
            id: 'menu-usermanagerole-link',
          },
        ],
      },
      {
        label: 'Units',
        icon: 'building',
        route: '/units',
        id: 'menu-units-link',
        pages: [
          {
            label: 'Search',
            icon: 'search',
            route: '/units',
            id: 'menu-unitsearch-link',
          },
          {
            label: 'Create new',
            icon: 'plus',
            route: '/units/create',
            id: 'menu-unitcreate-link',
          },
          {
            label: 'GS1 Supplier Numbers',
            icon: 'list-ol',
            route: '/units/supplier-numbers',
            id: 'menu-unitgs1suppliernumbers-link',
          },
          {
            label: 'Groups',
            icon: 'bullseye',
            route: '/units/groups',
            id: 'menu-unitgroups-link',
          },
          {
            label: 'Funds',
            icon: 'money-bill',
            route: '/units/funds',
            id: 'menu-unitfunds-link',
          },
        ],
      },
      {
        label: 'Notifications',
        icon: 'bell',
        route: '/general-notifications',
        id: 'menu-notifications-link',
        pages: [
          {
            label: 'Manage',
            icon: 'wrench',
            route: '/general-notifications',
            id: 'menu-notificationmanage-link',
          },
          {
            label: 'Recipients',
            icon: 'users',
            route: '/general-notifications/recipients',
            id: 'menu-notificationrecipients-link',
          },
        ],
      },
      {
        label: 'Customer Manager',
        icon: 'fire-extinguisher',
        route: '/customer-services',
        id: 'menu-customermanager-link',
      },
      {
        label: 'Staff Manager',
        icon: 'fire-extinguisher',
        route: '/staff-services',
        id: 'menu-staffmanager-link',
      },
      {
        label: 'Customer Care',
        icon: 'circle-user',
        route: '/customer-care',
        id: 'menu-customercare-customer-link',
      },
      {
        label: 'Customer Manager',
        icon: 'user',
        route: '/customer-manager',
        id: 'menu-customermanager-customer-link',
      },
      {
        label: 'Orders',
        icon: 'shopping-cart',
        route: '/orders',
        id: 'menu-customerservices-orders-link',
      },
      {
        label: 'Reporting',
        icon: 'chart-column',
        route: '/reports',
        id: 'menu-reporting-link',
        pages: [
          {
            label: 'Insights',
            icon: 'camera-retro',
            route: '/custom-reports/insights',
            id: 'menu-reportingcustominsights-link',
          },
          {
            label: 'Performance Report',
            icon: 'line-chart',
            route: '/reports/campaign/performance',
            id: 'menu-reportingperformance-link',
          },
          {
            label: 'Quick Compare',
            icon: 'pie-chart',
            route: '/reports/campaign/quickcompare',
            id: 'menu-reportingquickcompare-link',
          },
          {
            label: 'Transactions by Outlet',
            icon: 'home',
            route: '/reports/campaign/transactions-by-outlet',
            id: 'menu-reportingtransactionsoutlet-link',
          },
          {
            label: 'Custom Reporting',
            icon: 'line-chart',
            route: '/custom-reports/index',
            id: 'menu-reportingcustomreporting-link',
          },
          {
            label: 'Discount Limit Reached',
            icon: 'flag',
            route: '/reports/staff/maxed-out',
            id: 'menu-reportingdiscountlimitreached-link',
          },
          {
            label: 'Discount Limit Near',
            icon: 'flag',
            route: '/reports/staff/near-limit',
            id: 'menu-reportingdiscountlimitnear-link',
          },
          {
            label: 'Transactions by Store',
            icon: 'home',
            route: '/reports/staff/transactions-by-store',
            id: 'menu-reportingtransactionsbystore-link',
          },
          {
            label: 'Coupon Transactions',
            icon: 'fire-extinguisher',
            route: '/reports/coupon/transactions',
            id: 'menu-reportingcoupontransactions-link',
          },
          {
            label: 'Report Queue',
            icon: 'clock',
            route: '/reports-queue',
            id: 'menu-reportingreportqueue-link',
          },
          {
            label: 'Orders Report',
            icon: 'clock',
            route: '/reports/orders',
            id: 'menu-reportingordersreport-link',
          },
          {
            label: 'Audit Report',
            icon: 'bank',
            route: '/reports/audit',
            id: 'menu-reportingauditreport-link',
          },
          {
            label: 'Issuance Performance',
            icon: 'line-chart',
            route: '/reports/issuance/issuance-performance',
            id: 'menu-reportingissuanceperformance-link',
          },
          {
            label: 'Programmes',
            icon: 'book',
            route: '/reports/programme/programmes-reports',
            id: 'menu-programmesreports-link',
          },
          {
            label: 'app.navigation.reporting.sub_nav.label.pending_points_transactions',
            icon: 'clock',
            route: '/reports/pending-points-transactions',
            id: 'menu-pendingpointstransactions-link',
          },
          {
            label: 'app.navigation.reporting.sub_nav.label.wallet_history',
            icon: 'history',
            route: '/reports/campaign/wallet-history',
            id: 'menu-wallethistoryreport-link',
          },
          {
            label: 'Events Report',
            icon: 'book',
            route: '/reports/programme/programmes-reports#events',
            id: 'menu-eventsreport-link',
            hideLeftNavigation: true,
          },
          {
            label: 'Accounts Report',
            icon: 'copy',
            route: '/reports/programme/programmes-reports#accounts',
            id: 'menu-accountsreport-link',
            hideLeftNavigation: true,
          },
          {
            label: 'Account Status Report',
            icon: 'copy',
            route: '/reports/programme/programmes-reports#account-status',
            id: 'menu-accountstatusreport-link',
            hideLeftNavigation: true,
          },
        ],
      },
      {
        label: 'Microsites',
        icon: 'desktop',
        route: '/portal',
        id: 'menu-microsites-link',
        pages: [
          {
            label: 'Portals',
            icon: 'gift',
            route: '/portal',
            id: 'menu-micrositesportals-link',
            pages: [
              {
                label: 'Active Links',
                icon: 'link',
                route: '/microsites/active-discounts',
                id: 'menu-micrositesactivelinks-link',
              },
            ],
          },
          {
            label: 'eGift Orders',
            icon: 'line-chart',
            route: '/portal/orders',
            id: 'menu-micrositesorders-link',
          },
          {
            label: 'Multi-tier Discounts',
            icon: 'tags',
            route: '/microsites/discount-centre',
            id: 'menu-micrositesmultitierdiscounts-link',
          },
          {
            label: 'Manage Sites',
            icon: 'desktop',
            route: '/manage-sites/',
            id: 'menu-micrositessites-link',
          },
          {
            label: 'Manage Users',
            icon: 'address-card',
            route: '/microsite-users',
            id: 'menu-microsite-users-link',
          },
        ],
      },
    ],
    maintenance: [
      {
        label: 'System Settings',
        icon: 'cogs',
        route: '/settings/system',
        id: 'menu-setting-system-settings-link',
      },
      {
        label: 'Permissions',
        icon: 'lock',
        route: '/settings/permissions',
        id: 'menu-setting-permissions-link',
      },
      {
        label: 'Errors',
        icon: 'triangle-exclamation',
        route: '/settings/errors',
        id: 'menu-setting-errors-link',
      },
      {
        label: 'CSP Report',
        icon: 'shield',
        route: '/settings/csp-report',
        id: 'menu-setting-csp-report-link',
      },
    ],
  },
};

const mockWidgets = {
  success: true,
  message: 'Successfully loaded  widget data',
  errors: null,
  data: [
    {
      id: 1,
      dimension: {
        w: 3,
        h: 5,
      },
      locked: false,
      widgetType: 'EWelcome',
    },
    {
      id: 2,
      dimension: {
        w: 9,
        h: 5,
      },
      locked: false,
      widgetType: 'EStatistics',
    },
    {
      id: 3,
      dimension: {
        w: 3,
        h: 5,
      },
      locked: false,
      widgetType: 'ECreateCampaign',
      data: {
        title: 'app.dashboard.campaigns.headings.create_new_campaign',
        titleId: 'createNewCampaignId',
        subtitle: 'app.dashboard.campaigns.subtitles.create_new_campaign',
        buttons: [
          {
            href: '/campaigns/create',
            id: 'landing-page-create-new-campaign-button',
          },
        ],
        permission: {
          subtitle: 'app.dashboard.campaigns.permission.campaign_create',
        },
      },
    },
    {
      id: 4,
      dimension: {
        w: 4,
        h: 5,
      },
      locked: false,
      widgetType: 'ECreateFromType',
    },
    {
      id: 5,
      dimension: {
        w: 5,
        h: 5,
      },
      locked: false,
      widgetType: 'ECloneCampaign',
    },
  ],
};

const mockCampaignSearchForm = {
  success: true,
  form: [
    {
      name: 'common',
      title: 'Filter Campaigns',
      icon: 'filter',
      columns: 4,
      flat: true,
      $formkit: 'EFieldset',
      children: [
        {
          type: 'text',
          name: 'campaignName',
          class: 'q-pa-sm col-3',
          $formkit: 'ECompositeField',
          formPath: 'common.campaignName',
          id: 'campaignsearchform-input-common-campaign-name',
          fields: [
            {
              name: 'campaignName',
              label: 'Campaign Name',
              value: null,
            },
            {
              name: 'campaignId',
              label: 'Campaign Id',
              value: null,
            },
          ],
        },
        {
          type: 'select',
          'data-ee-select2': 'general',
          'data-placeholder': 'Select one or more campaign types',
          multiple: true,
          name: 'campaignTypeId',
          id: 'campaignTypeId',
          placeholder: 'app.campaign.search.placeholder.campaign_type',
          class: 'q-pa-sm col-3',
          $formkit: 'ESelect',
          formPath: 'common.campaignTypeId',
          options: [
            {
              value: 1,
              label: 'Standard National',
            },
            {
              value: 2,
              label: 'Standard Non-coded',
            },
            {
              value: 3,
              label: 'Preallocated Database',
            },
            {
              value: 4,
              label: 'Print & 3rd Parties',
            },
            {
              value: 5,
              label: 'Preallocated Database Recurring',
            },
            {
              value: 6,
              label: 'Open',
            },
            {
              value: 7,
              label: 'Loyalty',
            },
            {
              value: 8,
              label: 'Targeted',
            },
            {
              value: 9,
              label: 'New Customer',
            },
            {
              value: 10,
              label: 'Stamp Card Legacy',
            },
            {
              value: 11,
              label: 'Goodwill',
            },
            {
              value: 12,
              label: 'Manufacturer',
            },
            {
              value: 13,
              label: 'Price Match - Fixed',
            },
            {
              value: 14,
              label: 'Price Match - Variable',
            },
            {
              value: 15,
              label: 'Luncheon',
            },
            {
              value: 16,
              label: 'Healthy Start',
            },
            {
              value: 17,
              label: 'Self Funded',
            },
            {
              value: 18,
              label: 'Coinstar',
            },
            {
              value: 19,
              label: 'B2B',
            },
            {
              value: 20,
              label: 'National',
            },
            {
              value: 21,
              label: 'Free Item',
            },
            {
              value: 22,
              label: 'Generic Promo Code',
            },
            {
              value: 23,
              label: 'Generic Product Based Promo Code',
            },
            {
              value: 24,
              label: 'Stored Value',
            },
            {
              value: 25,
              label: 'Money off',
            },
            {
              value: 26,
              label: 'Point fixed',
            },
            {
              value: 27,
              label: 'Point Multiplier',
            },
            {
              value: 28,
              label: 'Promotion',
            },
            {
              value: 29,
              label: 'POS Driven Stamp Card',
            },
            {
              value: 30,
              label: 'Unique Code',
            },
            {
              value: 31,
              label: 'Supplier funded money off',
            },
            {
              value: 32,
              label: 'Supplier funded fixed points',
            },
            {
              value: 33,
              label: 'Bank Reward Unique Coupon',
            },
            {
              value: 34,
              label: 'Scan & Go',
            },
            {
              value: 35,
              label: 'Stars',
            },
            {
              value: 36,
              label: 'ASDA Colleague Discount',
            },
            {
              value: 37,
              label: 'NBM Money Off',
            },
            {
              value: 38,
              label: 'Waitrose Discount Basket',
            },
            {
              value: 39,
              label: 'Waitrose Discount Product',
            },
            {
              value: 40,
              label: 'Waitrose Discount Product (Loyalty)',
            },
            {
              value: 41,
              label: 'Waitrose Combo',
            },
            {
              value: 42,
              label: 'Waitrose Combo (Loyalty)',
            },
            {
              value: 44,
              label: 'TWG Discount Basket',
            },
            {
              value: 45,
              label: 'TWG Points Fixed',
            },
            {
              value: 46,
              label: 'TWG Points Multiplier',
            },
            {
              value: 47,
              label: 'TWG Buy One Get One Free',
            },
            {
              value: 48,
              label: 'TWG Discount Product',
            },
            {
              value: 50,
              label: 'Third Party Points',
            },
            {
              value: 51,
              label: 'Combo Promotion',
            },
            {
              value: 52,
              label: 'Stamp Card',
            },
            {
              value: 53,
              label: 'Bounce Back',
            },
            {
              value: 54,
              label: 'Meal Deal',
            },
            {
              value: 55,
              label: 'Multi Promotion Discount',
            },
            {
              value: 56,
              label: 'Exchange Points For Product Discount',
            },
            {
              value: 57,
              label: 'Quest',
            },
            {
              value: 58,
              label: 'Zero Reward',
            },
            {
              value: 59,
              label: 'Behavioural Action',
            },
            {
              value: 60,
              label: 'Tiered Issuance Qualification',
            },
            {
              value: 100,
              label: 'Discount Product',
            },
            {
              value: 101,
              label: 'Discount Basket',
            },
            {
              value: 102,
              label: 'Points Fixed',
            },
            {
              value: 103,
              label: 'Points Variable',
            },
            {
              value: 104,
              label: 'Points Multiplier',
            },
            {
              value: 105,
              label: 'Spend Rate Modifier',
            },
            {
              value: 106,
              label: 'Continuity',
            },
            {
              value: 107,
              label: 'Combo',
            },
            {
              value: 108,
              label: 'Colleague Discount Percentage',
            },
            {
              value: 109,
              label: 'Affiliate Discount Percentage',
            },
            {
              value: 110,
              label: 'Tiered Spend For Points',
            },
            {
              value: 111,
              label: 'Basket Spend Points Variable',
            },
            {
              value: 112,
              label: 'Basket Points Multiplier',
            },
            {
              value: 113,
              label: 'Product Points Multiplier',
            },
            {
              value: 114,
              label: 'Product Units Points Variable',
            },
            {
              value: 115,
              label: 'Product Spend Points Variable',
            },
            {
              value: 116,
              label: 'BOGO',
            },
            {
              value: 117,
              label: 'Discount Products',
            },
            {
              value: 118,
              label: 'Manual',
            },
            {
              value: 119,
              label: 'Points Loyalty',
            },
            {
              value: 120,
              label: 'Points Loyalty Variable Spend',
            },
          ],
          label: 'Type',
        },
        {
          name: 'campaignTags',
          multiple: true,
          resourceType: 'tags',
          class: 'q-pa-sm col-3',
          $formkit: 'ESelectAjax',
          formPath: 'common.campaignTags',
          id: 'campaignsearchform-input-common-campaign-tags',
          label: 'Tags',
        },
        {
          type: 'select',
          'data-ee-select2': 'general',
          name: 'status',
          id: 'campaign-status-select',
          'data-placeholder': 'Select one or more statuses',
          multiple: true,
          'data-load-value': 'ACTIVE,READY,DRAFT,SUSPENDED',
          class: 'q-pa-sm col-3',
          $formkit: 'ESelect',
          formPath: 'common.status',
          options: [
            {
              value: 'ACTIVE',
              label: 'Active',
            },
            {
              value: 'READY',
              label: 'Ready',
            },
            {
              value: 'DRAFT',
              label: 'Draft',
            },
            {
              value: 'PENDING',
              label: 'Pending',
            },
            {
              value: 'REJECTED',
              label: 'Rejected',
            },
            {
              value: 'INACTIVE',
              label: 'Inactive',
            },
            {
              value: 'EXPIRED',
              label: 'Expired',
            },
            {
              value: 'SUSPENDED',
              label: 'Suspended',
            },
            {
              value: 'STOPPED',
              label: 'Stopped',
            },
            {
              value: 'DELETED',
              label: 'Deleted',
            },
          ],
          value: [
            'ACTIVE',
            'READY',
            'DRAFT',
            'SUSPENDED',
          ],
          label: 'Status',
        },
      ],
    },
    {
      name: 'advanced',
      preserve: true,
      if: '$showAdvancedSearch',
      key: 'formkit_6888e1475826b1.76315813',
      columns: 4,
      $formkit: 'EFieldset',
      children: [
        {
          type: 'select',
          name: 'campaignMode',
          multiple: true,
          class: 'q-pa-sm col-3',
          $formkit: 'ESelect',
          formPath: 'advanced.campaignMode',
          id: 'campaignsearchform-input-advanced-campaign-mode',
          options: [
            {
              value: 'OPEN',
              label: 'Open',
            },
            {
              value: 'RESTRICTED',
              label: 'Targeted',
            },
          ],
          label: 'Mode',
        },
        {
          name: 'unitId',
          resourceType: 'unit',
          multiple: true,
          extraParams: {
            type: 'company',
          },
          class: 'q-pa-sm col-3',
          $formkit: 'ESelectAjax',
          formPath: 'advanced.unitId',
          id: 'campaignsearchform-input-advanced-unit-id',
          label: 'Unit',
        },
        {
          autocomplete: 'off',
          name: 'startDate',
          mode: 'range',
          timeSelector: false,
          class: 'q-pa-sm col-3',
          $formkit: 'EDateTimePicker',
          formPath: 'advanced.startDate',
          id: 'campaignsearchform-input-advanced-start-date',
          label: 'Start Date',
        },
        {
          autocomplete: 'off',
          name: 'endDate',
          mode: 'range',
          range: true,
          timeSelector: false,
          class: 'q-pa-sm col-3',
          $formkit: 'EDateTimePicker',
          formPath: 'advanced.endDate',
          id: 'campaignsearchform-input-advanced-end-date',
          label: 'End Date',
        },
        {
          type: 'text',
          name: 'reference',
          class: 'q-pa-sm col-3',
          $formkit: 'EInputField',
          formPath: 'advanced.reference',
          id: 'campaignsearchform-input-advanced-reference',
          label: 'Reference',
        },
        {
          type: 'text',
          name: 'universalCode',
          class: 'q-pa-sm col-3',
          $formkit: 'EInputField',
          formPath: 'advanced.universalCode',
          id: 'campaignsearchform-input-advanced-universal-code',
          label: 'Universal Coupon Code',
        },
        {
          name: 'ownerIds',
          resourceType: 'user',
          multiple: true,
          class: 'q-pa-sm col-3',
          $formkit: 'ESelectAjax',
          formPath: 'advanced.ownerIds',
          id: 'campaignsearchform-input-advanced-owner-ids',
          label: 'Owner',
        },
        {
          type: 'text',
          name: 'sequenceKey',
          class: 'q-pa-sm col-3',
          $formkit: 'EInputField',
          formPath: 'advanced.sequenceKey',
          id: 'campaignsearchform-input-advanced-sequence-key',
          label: 'Barcode',
        },
      ],
    },
  ],
};

const campaignSearchColumns = {
  success: true,
  columns: {
    campaignName: {
      name: 'Name',
      order: 1,
      sortable: true,
      visible: true,
    },
    campaignId: {
      name: 'ID',
      order: 2,
      sortable: true,
      visible: true,
    },
    unitName: {
      name: 'Unit',
      order: 3,
      sortable: false,
      visible: true,
    },
    ownerName: {
      name: 'Owner',
      order: 4,
      sortable: false,
      visible: true,
    },
    campaignMode: {
      name: 'Mode',
      order: 5,
      sortable: false,
      visible: false,
    },
    campaignType: {
      name: 'Type',
      order: 6,
      sortable: false,
      visible: true,
    },
    tags: {
      name: 'Tags',
      order: 7,
      sortable: false,
      visible: false,
    },
    barcodeValue: {
      name: 'Barcode',
      order: 8,
      sortable: false,
      visible: false,
    },
    supplierNumber: {
      name: 'SupplierNumber',
      order: 9,
      sortable: false,
      visible: false,
    },
    sequenceNumber: {
      name: 'SEQVTI',
      order: 10,
      sortable: false,
      visible: false,
    },
    endDate: {
      name: 'Date',
      order: 11,
      sortable: false,
      visible: true,
    },
    value: {
      name: 'Value',
      order: 12,
      sortable: false,
      visible: false,
    },
    redemptions: {
      name: 'Redemptions',
      order: 13,
      sortable: false,
      visible: false,
    },
    status: {
      name: 'Status',
      order: 14,
      sortable: false,
      visible: true,
    },
    actions: {
      name: 'Actions',
      sortable: false,
      visible: true,
    },
  },
};

const mockCampaignSearchResult = {
  recordsTotal: 235047,
  recordsFiltered: 235047,
  data: [
    {
      select: 102891329,
      campaignName: "'TestCampaignEMessages'",
      campaignId: 102891329,
      unitName: 'EESQA Parent',
      ownerName: 'service',
      campaignType: 'Discount Products',
      endDate: '2025-07-31 13:31:26',
      status: 'DRAFT',
      campaignTypeId: 117,
      ownerId: 1,
      createdDate: '2025-07-30 13:31:27',
      startDate: '2020-12-02 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns2/wizard/EDIT/DiscountProducts/102891329',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891329',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891329',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 1,
    },
    {
      select: 102891193,
      campaignName: 'Habiba + Dean Test',
      campaignId: 102891193,
      unitName: 'Habibas Haberdashery',
      ownerName: 'habiba',
      campaignType: 'Discount Basket',
      endDate: '2025-09-01 00:59:00',
      status: 'DRAFT',
      campaignTypeId: 101,
      ownerId: 3791,
      createdDate: '2025-07-30 09:25:38',
      startDate: '2025-07-30 01:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns2/wizard/EDIT/DiscountBasket/102891193',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891193',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891193',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 2,
    },
    {
      select: 102891190,
      campaignName: 'Test Campaign',
      campaignId: 102891190,
      unitName: 'Test Dashboard Wallet Unit',
      ownerName: 'service',
      campaignType: 'Standard National',
      endDate: '2025-07-31 00:59:59',
      status: 'ACTIVE',
      campaignTypeId: 1,
      ownerId: 1,
      createdDate: '2025-07-30 09:21:30',
      startDate: '2000-01-01 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns/editwizard/102891190',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891190',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891190',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'pauseSuspend',
          icon: 'pause',
          label: 'Pause / Suspend',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 3,
    },
    {
      select: 102891189,
      campaignName: 'campaignDelete',
      campaignId: 102891189,
      unitName: 'Test Dashboard Wallet Unit',
      ownerName: 'service',
      campaignType: 'Standard National',
      endDate: '2025-07-31 00:59:59',
      status: 'ACTIVE',
      campaignTypeId: 1,
      ownerId: 1,
      createdDate: '2025-07-30 09:20:32',
      startDate: '2000-01-01 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns/editwizard/102891189',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891189',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891189',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'pauseSuspend',
          icon: 'pause',
          label: 'Pause / Suspend',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 4,
    },
    {
      select: 102891188,
      campaignName: 'campaignEdit',
      campaignId: 102891188,
      unitName: 'Test Dashboard Wallet Unit',
      ownerName: 'service',
      campaignType: 'Standard National',
      endDate: '2025-07-31 00:59:59',
      status: 'ACTIVE',
      campaignTypeId: 1,
      ownerId: 1,
      createdDate: '2025-07-30 09:20:32',
      startDate: '2000-01-01 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns/editwizard/102891188',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891188',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891188',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'pauseSuspend',
          icon: 'pause',
          label: 'Pause / Suspend',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 5,
    },
    {
      select: 102891187,
      campaignName: 'campaignSuspend',
      campaignId: 102891187,
      unitName: 'Test Dashboard Wallet Unit',
      ownerName: 'service',
      campaignType: 'Standard National',
      endDate: '2025-07-31 00:59:59',
      status: 'ACTIVE',
      campaignTypeId: 1,
      ownerId: 1,
      createdDate: '2025-07-30 09:20:31',
      startDate: '2000-01-01 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns/editwizard/102891187',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891187',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891187',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'pauseSuspend',
          icon: 'pause',
          label: 'Pause / Suspend',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 6,
    },
    {
      select: 102891186,
      campaignName: 'Test Campaign',
      campaignId: 102891186,
      unitName: 'Test Dashboard Wallet Unit',
      ownerName: 'service',
      campaignType: 'Standard National',
      endDate: '2025-07-31 00:59:59',
      status: 'ACTIVE',
      campaignTypeId: 1,
      ownerId: 1,
      createdDate: '2025-07-30 09:20:27',
      startDate: '2000-01-01 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns/editwizard/102891186',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891186',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891186',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'pauseSuspend',
          icon: 'pause',
          label: 'Pause / Suspend',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 7,
    },
    {
      select: 102891185,
      campaignName: 'Test Campaign',
      campaignId: 102891185,
      unitName: 'Test Dashboard Wallet Unit',
      ownerName: 'service',
      campaignType: 'Standard National',
      endDate: '2025-07-31 00:59:59',
      status: 'ACTIVE',
      campaignTypeId: 1,
      ownerId: 1,
      createdDate: '2025-07-30 09:19:42',
      startDate: '2000-01-01 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns/editwizard/102891185',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891185',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891185',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'pauseSuspend',
          icon: 'pause',
          label: 'Pause / Suspend',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 8,
    },
    {
      select: 102891183,
      campaignName: 'campaignEdit2',
      campaignId: 102891183,
      unitName: 'Test Dashboard Wallet Unit',
      ownerName: 'service',
      campaignType: 'Standard National',
      endDate: '2025-07-31 00:59:59',
      status: 'ACTIVE',
      campaignTypeId: 1,
      ownerId: 1,
      createdDate: '2025-07-30 09:19:01',
      startDate: '2000-01-01 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns/editwizard/102891183',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891183',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891183',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'pauseSuspend',
          icon: 'pause',
          label: 'Pause / Suspend',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 9,
    },
    {
      select: 102891182,
      campaignName: 'campaignEdit',
      campaignId: 102891182,
      unitName: 'Test Dashboard Wallet Unit',
      ownerName: 'service',
      campaignType: 'Standard National',
      endDate: '2025-07-31 00:59:59',
      status: 'ACTIVE',
      campaignTypeId: 1,
      ownerId: 1,
      createdDate: '2025-07-30 09:19:01',
      startDate: '2000-01-01 00:00:00',
      action: '',
      actions: [
        {
          name: 'edit',
          icon: 'edit',
          label: 'Edit',
          url: '/campaigns/editwizard/102891182',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'emailSummary',
          icon: 'envelope',
          label: 'Email Summary',
          url: '/campaigns/email-summary/102891182',
        },
        {
          name: 'clone',
          icon: 'copy',
          label: 'Clone',
          url: '/campaigns/clone/102891182',
        },
        {
          name: 'createToken',
          icon: 'plus',
          label: 'Create Coupon',
        },
        {
          name: 'pauseSuspend',
          icon: 'pause',
          label: 'Pause / Suspend',
        },
        {
          name: 'stop',
          icon: 'hand-paper-o',
          label: 'Stop',
        },
        {
          name: 'divider',
          icon: '',
          label: '',
        },
        {
          name: 'delete',
          icon: 'trash-o',
          label: 'Delete',
        },
      ],
      rowNumber: 10,
    },
  ],
  error: '',
  errorMessage: '',
  draw: 0,
};

app.get('/api/session/info', async (req, res) => {
  res.json(mockSession)
});

app.get('/api/csrf', async (req, res) => {
  res.json({
    csrfToken: 'mock-csrf-token',
  });
});

app.get('/api/landing/widgets', async (req, res) => {
  res.json(mockWidgets)
});

app.get('/api/forms/campaign-search', async (req, res) => {
  res.json(mockCampaignSearchForm)
});

app.get('/api/columns/campaign-search', async (req, res) => {
  res.json(campaignSearchColumns)
});

// Mock campaigns data for landing page
const mockCampaigns = {
  success: false,
  message: 'You do not have any campaigns available to clone.',
  errors: null,
  data: [],
};

const mockCampaignStats = {
  success: true,
  message: 'Successfully retrieved campaign stats',
  errors: null,
  data: {
    PENDING: 1271,
    READY: 32,
    ACTIVE: 218043,
    INACTIVE: 2213,
    SUSPENDED: 4592,
    EXPIRING_SOON: 2287,
  },
};

const mockRecentCampaignTypes = {
  success: false,
  message: '',
  errors: null,
  data: [
    {
      id: 101,
      name: 'Discount Basket',
      icon: null,
      nameSafe: 'DiscountBasket',
    },
    {
      id: 102,
      name: 'Points Fixed',
      icon: null,
      nameSafe: 'PointsFixed',
    },
    {
      id: 117,
      name: 'Discount Products',
      icon: null,
      nameSafe: 'DiscountProducts',
    },
  ],
}

app.get('/api/landing/campaigns', async (req, res) => {
  res.json(mockCampaigns)
});

app.get('/api/landing/campaign-stats', async (req, res) => {
  res.json(mockCampaignStats)
});

app.get('/api/landing/recent-campaign-types', async (req, res) => {
  res.json(mockRecentCampaignTypes)
});
// eslint-disable-next-line max-len
app.get('/campaigns/api', async (req, res) => {
  res.json(mockCampaignSearchResult)
});

// Campaign review mock data
const mockCampaignReview = {
  campaignId: '12345',
  campaignName: 'Test Campaign',
  description: 'This is text description',
  status: 'draft',
  steps: {
    nameAndTag: {
      campaignName: 'Test Campaign',
      description: 'This is text description',
      issuancePartner: 'Eagle Eye',
      redemptionPartners: 'Eagle Eye',
      externalReferenceId: '#00000000000',
    },
    qualification: {
      redemptionPartners: 'Partner 1',
      excludedProducts: ['List 1'],
      excludedLocations: ['List 1'],
      defaultGraceAmount: 10,
      eagleEyeGraceAmount: null,
      qualifyingTenders: 'Cash',
      identityTypeIncluded: 'Customer ID',
      redemptionChannelIncluded: 'Online',
    },
    reward: {
      points: 1000,
      scheme: '#0000123456 - Retail Points - Active - 7',
      redemptionLimit: 'Multiple',
      maxRedemptions: 2,
      maxRedemptionPerPeriod: 'Unlimited',
    },
    restrictions: {
      campaignAvailability: 'Open to all consumers',
      allowOverride: true,
      clientAccountState: 'Loaded',
      clientAccountType: 'Behavioral Action',
      isOpenCampaign: true,
    },
    scheduling: {
      couponStart: "10 Apr'24  00.00 AM",
      couponExpiry: "10 Apr'24  00.00 AM",
      campaignStartDate: "10 Apr'24  00.00 AM",
      campaignEndDate: "10 Apr'24  00.00 AM",
      daysToStart: 4,
    },
    customForm: {
      // eslint-disable-next-line max-len
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F9d8613581c8b4475889beae5453d8e63%2Fb0eb962dfd47454f9a937a301fc5602b?format=webp&width=800',
      fields: [
        { label: 'Label', value: 'Value' },
        { label: 'Label', value: 'Value' },
        { label: 'Label', value: 'Value' },
        { label: 'Label', value: 'Value' },
        { label: 'Label', value: 'Value' },
      ],
    },
  },
};

const mockCampaignDiscountProductsForm = {
  success: true,
  name: 'Discount Products',
  form: {
    wizard: [
      {
        name: 'general',
        icon: null,
        $formkit: 'EFieldset',
        children: [
          {
            name: 'nameDescription',
            $formkit: 'EFieldsetExpandable',
            title: 'Name & Description',
            children: [
              {
                type: 'text',
                name: 'name',
                $formkit: 'EInputField',
                formPath: 'general.nameDescription.name',
                id: 'form-input-general-name-description-name',
                label: 'Name',
              },
              {
                type: 'text',
                name: 'description',
                $formkit: 'EInputField',
                formPath: 'general.nameDescription.description',
                id: 'form-input-general-name-description-description',
                label: 'Description',
              },
            ],
          },
          {
            name: 'redemptionPartners',
            $formkit: 'EFieldsetExpandable',
            title: 'Redemption Partners',
            children: [
              {
                type: 'select',
                'data-ee-select2': 'general',
                'data-ee-select2-preload': 'false',
                multiple: true,
                name: 'redemptionPartners',
                $formkit: 'ESelect',
                formPath: 'general.redemptionPartners.redemptionPartners',
                id: 'form-input-general-redemption-partners-redemption-partners',
                options: [
                  {
                    value: 2,
                    label: 'PizzaExpress',
                  },
                  {
                    value: 1739,
                    label: 'PROCTER & GAMBLE Brand National',
                  },
                  {
                    value: 1740,
                    label: 'PEPSICO Brand National',
                  },
                  {
                    value: 1802,
                    label: 'Colgate Promote',
                  },
                  {
                    value: 1803,
                    label: '30075 Promote',
                  },
                  {
                    value: 1807,
                    label: 'Warburtons promote',
                  },
                  {
                    value: 1808,
                    label: 'Promote Demo',
                  },
                  {
                    value: 1813,
                    label: "THE FABULOUS BAKIN' BOYS LTD  - promote",
                  },
                  {
                    value: 1815,
                    label: 'Tricia-Promote',
                  },
                  {
                    value: 2382,
                    label: 'Tricia Test_Promote',
                  },
                ],
                label: 'Redemption Partner',
              },
            ],
          },
          {
            name: 'issuancePartners',
            $formkit: 'EFieldsetExpandable',
            title: 'Issuance Partners',
            children: [
              {
                type: 'select',
                'data-ee-select2': 'general',
                'data-ee-select2-preload': 'false',
                multiple: true,
                name: 'issuancePartners',
                $formkit: 'ESelect',
                formPath: 'general.issuancePartners.issuancePartners',
                id: 'form-input-general-issuance-partners-issuance-partners',
                options: [
                  {
                    value: 2,
                    label: 'PizzaExpress',
                  },
                  {
                    value: 1739,
                    label: 'PROCTER & GAMBLE Brand National',
                  },
                  {
                    value: 1740,
                    label: 'PEPSICO Brand National',
                  },
                  {
                    value: 1802,
                    label: 'Colgate Promote',
                  },
                  {
                    value: 1803,
                    label: '30075 Promote',
                  },
                  {
                    value: 1807,
                    label: 'Warburtons promote',
                  },
                  {
                    value: 1808,
                    label: 'Promote Demo',
                  },
                  {
                    value: 1813,
                    label: "THE FABULOUS BAKIN' BOYS LTD  - promote",
                  },
                  {
                    value: 1815,
                    label: 'Tricia-Promote',
                  },
                  {
                    value: 2382,
                    label: 'Tricia Test_Promote',
                  },
                ],
                label: 'Issuance Partner',
              },
            ],
          },
          {
            name: 'addTag',
            $formkit: 'EFieldsetExpandable',
            title: 'Add a tag',
            children: [
              {
                name: 'tags',
                multiple: true,
                resourceType: 'tags',
                $formkit: 'ESelectAjax',
                formPath: 'general.addTag.tags',
                id: 'form-input-general-add-tag-tags',
                label: 'Tags',
              },
            ],
          },
        ],
      },
    ],
    wizardIndexArray: [
      {
        name: 'general',
        title: 'General',
      },
    ],
  },
}

const mockDraftCampaignDiscountProductsForm = {
  success: true,
  data: {},
}

app.get('/api/campaigns/:id/review', async (req, res) => {
  res.json(mockCampaignReview)
});

app.get('/api/wizard-form/discount-products', async (req, res) => {
  res.json(mockCampaignDiscountProductsForm)
});

app.get('/api/campaign-wizard/draft', async (req, res) => {
  res.json(mockDraftCampaignDiscountProductsForm)
});

app.listen(mockApiPort, () => console.log(`App running at port ${mockApiPort}`));

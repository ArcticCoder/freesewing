import {
  DesignOptions,
  ns as designMenuNs,
} from 'shared/components/workbench/menus/design-options/index.mjs'
import {
  CoreSettings,
  ns as coreMenuNs,
} from 'shared/components/workbench/menus/core-settings/index.mjs'
import { XrayMenu, ns as xrayNs } from 'shared/components/workbench/menus/xray/index.mjs'

export const ns = [...coreMenuNs, ...designMenuNs, ...xrayNs]

export const DraftMenu = ({
  design,
  pattern,
  patternConfig,
  settings,
  ui,
  update,
  language,
  account,
  DynamicDocs,
}) => (
  <nav className="grow mb-12">
    <DesignOptions
      {...{ design, patternConfig, settings, update, language, account, DynamicDocs }}
    />
    {account.control === 1 ? null : (
      <CoreSettings {...{ patternConfig, settings, update, language, account, DynamicDocs }} />
    )}
    {ui.renderer === 'react' && <XrayMenu {...{ ui, update, DynamicDocs }} />}
  </nav>
)

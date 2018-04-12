import test from 'ava'
import m from '.'

test('async', async t => {
  t.is(await m('.'), undefined)
  t.is(await m('fixture/in-root'), 'fixture/in-root/config.xml')
  t.is(await m('fixture/in-www'), 'fixture/in-www/www/config.xml')
  t.is(await m('fixture/double-trouble'), 'fixture/double-trouble/config.xml')
})

test('sync', t => {
  t.is(m.sync('.'), undefined)
  t.is(m.sync('fixture/in-root'), 'fixture/in-root/config.xml')
  t.is(m.sync('fixture/in-www'), 'fixture/in-www/www/config.xml')
  t.is(m.sync('fixture/double-trouble'), 'fixture/double-trouble/config.xml')
})
